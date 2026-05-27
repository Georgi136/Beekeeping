import type { PageStatus, Prisma } from '@prisma/client'
import {
  createLandingPage,
  deleteLandingPage,
  findLandingPageBySlug,
  listLandingPages,
  updateLandingPage
} from '../repositories/landingPageRepository'
import { AppError } from '../errors/AppError'
import { makeSlug } from '../utils/slug'

interface LandingPageInput {
  title: string
  slug?: string
  heroTitle: string
  heroSubtitle?: string | null
  heroImage?: string | null
  ctaText?: string | null
  ctaLink?: string | null
  sections: unknown
  status: PageStatus
  seoTitle?: string | null
  seoDescription?: string | null
}

function mapInput(input: LandingPageInput): Prisma.LandingPageCreateInput {
  return {
    title: input.title,
    slug: input.slug ? makeSlug(input.slug) : makeSlug(input.title),
    heroTitle: input.heroTitle,
    heroSubtitle: input.heroSubtitle || null,
    heroImage: input.heroImage || null,
    ctaText: input.ctaText || null,
    ctaLink: input.ctaLink || null,
    sections: input.sections as Prisma.InputJsonValue,
    status: input.status,
    seoTitle: input.seoTitle || input.title,
    seoDescription: input.seoDescription || input.heroSubtitle || null
  }
}

export function getLandingPages(includeDrafts = false) {
  return listLandingPages(includeDrafts)
}

export async function getLandingPage(slug: string, includeDrafts = false) {
  const page = await findLandingPageBySlug(slug, includeDrafts)
  if (!page) {
    throw new AppError(404, 'Страницата не е намерена.')
  }
  return page
}

export function createLandingPageRecord(input: LandingPageInput) {
  return createLandingPage(mapInput(input))
}

export function updateLandingPageRecord(id: number, input: LandingPageInput) {
  return updateLandingPage(id, mapInput(input))
}

export function archiveLandingPage(id: number) {
  return deleteLandingPage(id)
}
