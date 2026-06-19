import { Prisma } from '../../lib/prismaClient'
import { AppError } from '../../errors/AppError'
import { prisma } from '../../lib/prisma'
import { listOrders, orderInclude } from './order.repository'
import { toNumber } from '../../utils/money'
import { notifyNewOrder } from '../../services/notificationService'
import type { OrderInput, OrderWithItems } from './order.types'

function orderToDto(order: OrderWithItems) {
  return {
    id: order.id,
    customerName: order.customerName,
    phone: order.phone,
    email: order.email,
    address: order.address,
    notes: order.notes,
    status: order.status,
    totalPrice: toNumber(order.totalPrice),
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
    items: order.items.map((item) => ({
      id: item.id,
      productId: item.productId,
      name: item.name,
      price: toNumber(item.price),
      quantity: item.quantity,
      image: item.product?.images[0]?.url || ''
    }))
  }
}

export async function createCustomerOrder(input: OrderInput) {
  const quantitiesByProduct = new Map<number, number>()
  for (const item of input.items) {
    quantitiesByProduct.set(item.productId, (quantitiesByProduct.get(item.productId) || 0) + item.quantity)
  }

  const productIds = [...quantitiesByProduct.keys()]
  const products = await prisma.product.findMany({
    where: {
      id: { in: productIds },
      status: 'ACTIVE'
    },
    include: { erpProduct: true }
  })

  if (products.length !== productIds.length) {
    throw new AppError(400, 'Some selected products are no longer available.')
  }

  const productMap = new Map(products.map((product) => [product.id, product]))
  const items = productIds.map((productId) => {
    const product = productMap.get(productId)
    if (!product) throw new AppError(400, 'Product not found.')

    const quantity = quantitiesByProduct.get(productId) || 0
    const availableStock = product.erpProduct ? Number(product.erpProduct.stockQuantity) : product.stock
    if (availableStock < quantity) {
      throw new AppError(400, `Not enough stock for "${product.name}".`)
    }

    return {
      product,
      quantity,
      price: product.salePrice ?? product.price
    }
  })

  const total = items.reduce((sum, item) => sum.add(item.price.mul(item.quantity)), new Prisma.Decimal(0))

  const order = await prisma.$transaction(async (tx) => {
    for (const item of items) {
      if (item.product.erpProductId) {
        const result = await tx.erpProduct.updateMany({
          where: { id: item.product.erpProductId, stockQuantity: { gte: item.quantity } },
          data: {
            stockQuantity: { decrement: item.quantity },
            totalSoldQuantity: { increment: item.quantity }
          }
        })
        if (result.count !== 1) throw new AppError(400, `Not enough stock for "${item.product.name}".`)
      } else {
        const result = await tx.product.updateMany({
          where: { id: item.product.id, stock: { gte: item.quantity } },
          data: { stock: { decrement: item.quantity } }
        })
        if (result.count !== 1) throw new AppError(400, `Not enough stock for "${item.product.name}".`)
      }
    }

    const created = await tx.order.create({
      data: {
        customerName: input.customerName,
        phone: input.phone,
        email: input.email || null,
        address: input.address,
        notes: input.notes || null,
        totalPrice: total,
        items: {
          create: items.map((item) => ({
            productId: item.product.id,
            name: item.product.name,
            price: item.price,
            quantity: item.quantity
          }))
        }
      },
      include: orderInclude
    })

    for (const item of items) {
      if (!item.product.erpProductId) continue
      await tx.erpInventoryMovement.create({
        data: {
          productId: item.product.erpProductId,
          movementType: 'SALE',
          quantityChange: new Prisma.Decimal(item.quantity).neg(),
          referenceType: 'webshop_order',
          referenceKey: created.id,
          notes: `Webshop order: ${created.id}`
        }
      })
    }

    return created
  })

  const dto = orderToDto(order)
  const notification = await notifyNewOrder(dto)
  return { ...dto, notification }
}

export async function getAdminOrders() {
  const orders = await listOrders()
  return orders.map(orderToDto)
}

export async function setOrderStatus(id: string, status: OrderWithItems['status']) {
  const order = await prisma.$transaction(async (tx) => {
    const existing = await tx.order.findUnique({ where: { id }, include: orderInclude })
    if (!existing) throw new AppError(404, 'Order not found.')
    if (existing.status === status) return existing
    if (existing.status === 'CANCELLED') {
      throw new AppError(400, 'A canceled order cannot be activated again.')
    }

    if (status === 'CANCELLED') {
      for (const item of existing.items) {
        if (item.product?.erpProductId) {
          await tx.erpProduct.update({
            where: { id: item.product.erpProductId },
            data: {
              stockQuantity: { increment: item.quantity },
              totalSoldQuantity: { decrement: item.quantity }
            }
          })
          await tx.erpInventoryMovement.create({
            data: {
              productId: item.product.erpProductId,
              movementType: 'RETURN',
              quantityChange: item.quantity,
              referenceType: 'webshop_order',
              referenceKey: existing.id,
              notes: `Canceled webshop order: ${existing.id}`
            }
          })
        } else if (item.productId) {
          await tx.product.update({
            where: { id: item.productId },
            data: { stock: { increment: item.quantity } }
          })
        }
      }
    }

    return tx.order.update({ where: { id }, data: { status }, include: orderInclude })
  })

  return orderToDto(order)
}
