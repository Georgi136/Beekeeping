import { Prisma } from '@prisma/client'
import { prisma } from '../lib/prisma'

export const promotionInclude = {
  product: true,
  category: true
}

export function listPromotions(includeInactive = false) {
  const now = new Date()
  return prisma.promotion.findMany({
    where: includeInactive
      ? undefined
      : {
          active: true,
          OR: [{ startsAt: null }, { startsAt: { lte: now } }],
          AND: [{ OR: [{ endsAt: null }, { endsAt: { gte: now } }] }]
        },
    include: promotionInclude,
    orderBy: { updatedAt: 'desc' }
  })
}

export function createPromotion(data: Prisma.PromotionCreateInput) {
  return prisma.promotion.create({
    data,
    include: promotionInclude
  })
}

export function updatePromotion(id: number, data: Prisma.PromotionUpdateInput) {
  return prisma.promotion.update({
    where: { id },
    data,
    include: promotionInclude
  })
}

export function deletePromotion(id: number) {
  return prisma.promotion.delete({ where: { id } })
}
