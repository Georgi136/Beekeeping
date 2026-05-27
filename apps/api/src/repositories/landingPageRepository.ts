import { PageStatus, Prisma } from '@prisma/client'
import { prisma } from '../lib/prisma'

export function listLandingPages(includeDrafts = false) {
  return prisma.landingPage.findMany({
    where: includeDrafts ? undefined : { status: PageStatus.PUBLISHED },
    orderBy: { updatedAt: 'desc' }
  })
}

export function findLandingPageBySlug(slug: string, includeDrafts = false) {
  return prisma.landingPage.findFirst({
    where: {
      slug,
      status: includeDrafts ? undefined : PageStatus.PUBLISHED
    }
  })
}

export function createLandingPage(data: Prisma.LandingPageCreateInput) {
  return prisma.landingPage.create({ data })
}

export function updateLandingPage(id: number, data: Prisma.LandingPageUpdateInput) {
  return prisma.landingPage.update({
    where: { id },
    data
  })
}

export function deleteLandingPage(id: number) {
  return prisma.landingPage.update({
    where: { id },
    data: { status: PageStatus.ARCHIVED }
  })
}
