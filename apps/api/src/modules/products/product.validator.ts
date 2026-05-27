import { ProductStatus } from '../../lib/prismaClient'
import { z } from 'zod'

const optionalString = z.string().trim().optional().nullable()

export const productQuerySchema = z.object({
  category: z.string().trim().optional(),
  featured: z.coerce.boolean().optional(),
  status: z.nativeEnum(ProductStatus).optional()
})

export const productImageSchema = z.object({
  url: z.string().min(1),
  alt: optionalString,
  sortOrder: z.coerce.number().int().min(0).default(0)
})

export const productUpsertSchema = z.object({
  name: z.string().trim().min(2),
  slug: z.string().trim().optional(),
  shortDescription: optionalString,
  description: z.string().trim().min(5),
  price: z.coerce.number().nonnegative(),
  salePrice: z.coerce.number().nonnegative().optional().nullable(),
  stock: z.coerce.number().int().min(0).default(0),
  status: z.nativeEnum(ProductStatus).default(ProductStatus.DRAFT),
  featured: z.coerce.boolean().default(false),
  categoryId: z.coerce.number().int().positive(),
  seoTitle: optionalString,
  seoDescription: optionalString,
  images: z.array(productImageSchema).default([])
})
