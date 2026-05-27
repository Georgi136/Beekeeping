import { PageStatus } from '../lib/prismaClient'
import { z } from 'zod'

export const landingPageUpsertSchema = z.object({
  title: z.string().trim().min(2),
  slug: z.string().trim().optional(),
  heroTitle: z.string().trim().min(2),
  heroSubtitle: z.string().trim().optional().nullable(),
  heroImage: z.string().trim().optional().nullable(),
  ctaText: z.string().trim().optional().nullable(),
  ctaLink: z.string().trim().optional().nullable(),
  sections: z.unknown().default([]),
  status: z.nativeEnum(PageStatus).default(PageStatus.DRAFT),
  seoTitle: z.string().trim().optional().nullable(),
  seoDescription: z.string().trim().optional().nullable()
})
