import { DiscountType } from '../lib/prismaClient'
import { z } from 'zod'

const nullableNumber = z.coerce.number().int().positive().optional().nullable()
const nullableDate = z.string().datetime().optional().nullable()

export const promotionUpsertSchema = z.object({
  title: z.string().trim().min(2),
  slug: z.string().trim().optional(),
  description: z.string().trim().optional().nullable(),
  discountType: z.nativeEnum(DiscountType),
  discountValue: z.coerce.number().nonnegative(),
  startsAt: nullableDate,
  endsAt: nullableDate,
  active: z.coerce.boolean().default(false),
  bannerText: z.string().trim().optional().nullable(),
  productId: nullableNumber,
  categoryId: nullableNumber,
  seoTitle: z.string().trim().optional().nullable(),
  seoDescription: z.string().trim().optional().nullable()
})
