import { z } from 'zod'

const optionalString = z.string().trim().optional().nullable()

export const categoryUpsertSchema = z.object({
  name: z.string().trim().min(2),
  slug: z.string().trim().optional(),
  description: optionalString,
  sortOrder: z.coerce.number().int().default(0)
})
