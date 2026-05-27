import { OrderStatus } from '../../lib/prismaClient'
import { z } from 'zod'

export const createOrderSchema = z.object({
  customerName: z.string().trim().min(2),
  phone: z.string().trim().min(6),
  email: z.string().email().optional().or(z.literal('')).transform((value) => value || undefined),
  address: z.string().trim().min(5),
  notes: z.string().trim().optional(),
  items: z.array(
    z.object({
      productId: z.coerce.number().int().positive(),
      quantity: z.coerce.number().int().positive()
    })
  ).min(1)
})

export const updateOrderStatusSchema = z.object({
  status: z.nativeEnum(OrderStatus)
})
