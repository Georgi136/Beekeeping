import type { Prisma } from '../../lib/prismaClient'
import { orderInclude } from './order.repository'

export interface OrderInput {
  customerName: string
  phone: string
  email?: string
  address: string
  notes?: string
  items: Array<{
    productId: number
    quantity: number
  }>
}

export type OrderWithItems = Prisma.OrderGetPayload<{
  include: typeof orderInclude
}>
