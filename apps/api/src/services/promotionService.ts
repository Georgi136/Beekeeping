import type { DiscountType, Prisma } from '../lib/prismaClient'
import {
  createPromotion,
  deletePromotion,
  listPromotions,
  updatePromotion
} from '../repositories/promotionRepository'
import { makeSlug } from '../utils/slug'
import { toDecimal, toNumber } from '../utils/money'

interface PromotionInput {
  title: string
  slug?: string
  description?: string | null
  discountType: DiscountType
  discountValue: number
  startsAt?: string | null
  endsAt?: string | null
  active: boolean
  bannerText?: string | null
  productId?: number | null
  categoryId?: number | null
  seoTitle?: string | null
  seoDescription?: string | null
}

function toDto(promotion: Awaited<ReturnType<typeof createPromotion>>) {
  return {
    ...promotion,
    discountValue: toNumber(promotion.discountValue)
  }
}

function mapInput(input: PromotionInput): Prisma.PromotionCreateInput {
  return {
    title: input.title,
    slug: input.slug ? makeSlug(input.slug) : makeSlug(input.title),
    description: input.description || null,
    discountType: input.discountType,
    discountValue: toDecimal(input.discountValue) ?? 0,
    startsAt: input.startsAt ? new Date(input.startsAt) : null,
    endsAt: input.endsAt ? new Date(input.endsAt) : null,
    active: input.active,
    bannerText: input.bannerText || null,
    seoTitle: input.seoTitle || input.title,
    seoDescription: input.seoDescription || input.description || null,
    product: input.productId ? { connect: { id: input.productId } } : undefined,
    category: input.categoryId ? { connect: { id: input.categoryId } } : undefined
  }
}

export async function getPromotions(includeInactive = false) {
  const promotions = await listPromotions(includeInactive)
  return promotions.map((promotion) => ({
    ...promotion,
    discountValue: toNumber(promotion.discountValue)
  }))
}

export async function createPromotionRecord(input: PromotionInput) {
  return toDto(await createPromotion(mapInput(input)))
}

export async function updatePromotionRecord(id: number, input: PromotionInput) {
  return toDto(await updatePromotion(id, mapInput(input)))
}

export function deletePromotionRecord(id: number) {
  return deletePromotion(id)
}
