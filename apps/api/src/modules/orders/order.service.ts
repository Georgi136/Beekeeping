import { Prisma } from '../../lib/prismaClient'
import { AppError } from '../../errors/AppError'
import { prisma } from '../../lib/prisma'
import {
  listOrders,
  orderInclude,
  updateOrderStatus
} from './order.repository'
import { toNumber } from '../../utils/money'
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
  const productIds = input.items.map((item) => item.productId)
  const products = await prisma.product.findMany({
    where: {
      id: { in: productIds },
      status: 'ACTIVE'
    }
  })

  if (products.length !== productIds.length) {
    throw new AppError(400, 'Някои от избраните продукти вече не са налични.')
  }

  const productMap = new Map(products.map((product) => [product.id, product]))
  const items = input.items.map((item) => {
    const product = productMap.get(item.productId)
    if (!product) {
      throw new AppError(400, 'Продуктът не е намерен.')
    }

    if (product.stock < item.quantity) {
      throw new AppError(400, `Няма достатъчна наличност от "${product.name}".`)
    }

    const price = product.salePrice ?? product.price
    return {
      product,
      quantity: item.quantity,
      price
    }
  })

  const total = items.reduce((sum, item) => sum.add(item.price.mul(item.quantity)), new Prisma.Decimal(0))

  const order = await prisma.$transaction(async (tx) => {
    for (const item of items) {
      await tx.product.update({
        where: { id: item.product.id },
        data: {
          stock: {
            decrement: item.quantity
          }
        }
      })
    }

    return tx.order.create({
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
  })

  return orderToDto(order)
}

export async function getAdminOrders() {
  const orders = await listOrders()
  return orders.map(orderToDto)
}

export async function setOrderStatus(id: string, status: Parameters<typeof updateOrderStatus>[1]) {
  const order = await updateOrderStatus(id, status)
  return orderToDto(order)
}
