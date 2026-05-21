import { OrderStatus, Prisma } from '@prisma/client'
import { prisma } from '../lib/prisma'

export const orderInclude = {
  items: {
    include: {
      product: {
        include: {
          images: {
            orderBy: { sortOrder: 'asc' as const }
          }
        }
      }
    }
  }
}

export type OrderWithItems = Prisma.OrderGetPayload<{
  include: typeof orderInclude
}>

export function createOrder(data: Prisma.OrderCreateInput) {
  return prisma.order.create({
    data,
    include: orderInclude
  })
}

export function listOrders() {
  return prisma.order.findMany({
    include: orderInclude,
    orderBy: { createdAt: 'desc' }
  })
}

export function updateOrderStatus(id: string, status: OrderStatus) {
  return prisma.order.update({
    where: { id },
    data: { status },
    include: orderInclude
  })
}
