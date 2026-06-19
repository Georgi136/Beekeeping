import type { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'
import { env } from '../../config/env'
import { editableSettingKeys } from './siteSettings.constants'

const defaultSectionOrder = 'hero,products,about,contact'

function databaseLabel() {
  if (!env.databaseUrl) return 'Not configured'
  try {
    const url = new URL(env.databaseUrl)
    return `${url.protocol.replace(':', '')}://${url.hostname}:${url.port || '5432'}/${url.pathname.replace('/', '')}`
  } catch {
    return 'Configured'
  }
}

async function getEditableSettings() {
  const settings = await prisma.erpSetting.findMany({
    where: { key: { in: editableSettingKeys } },
    orderBy: { key: 'asc' }
  })
  return Object.fromEntries(settings.map((setting) => [setting.key, setting.value]))
}

function readHomepage(settings: Record<string, string>, prefix: 'homepage' | 'homepageDraft') {
  return {
    bg: Object.fromEntries(Object.entries(settings).filter(([key]) => key.startsWith(`${prefix}.bg.`)).map(([key, value]) => [key.replace(`${prefix}.bg.`, ''), value])),
    en: Object.fromEntries(Object.entries(settings).filter(([key]) => key.startsWith(`${prefix}.en.`)).map(([key, value]) => [key.replace(`${prefix}.en.`, ''), value])),
    meta: Object.fromEntries(Object.entries(settings).filter(([key]) => key.startsWith(`${prefix}.meta.`)).map(([key, value]) => [key.replace(`${prefix}.meta.`, ''), value]))
  }
}

function readPrefix(settings: Record<string, string>, prefix: string) {
  return Object.fromEntries(Object.entries(settings)
    .filter(([key]) => key.startsWith(`${prefix}.`))
    .map(([key, value]) => [key.replace(`${prefix}.`, ''), value]))
}

function withDraftFallback(settings: Record<string, string>) {
  const next = { ...settings }
  const allowedKeys = new Set(editableSettingKeys)
  for (const [key, value] of Object.entries(settings)) {
    if (!key.startsWith('homepage.')) continue
    const draftKey = key.replace('homepage.', 'homepageDraft.')
    if (allowedKeys.has(draftKey) && !(draftKey in next)) next[draftKey] = value
  }
  if (!next['homepage.meta.sectionOrder']) next['homepage.meta.sectionOrder'] = defaultSectionOrder
  if (!next['homepageDraft.meta.sectionOrder']) next['homepageDraft.meta.sectionOrder'] = next['homepage.meta.sectionOrder']
  return next
}

export async function getPublicSiteSettings(_req: Request, res: Response) {
  const settings = withDraftFallback(await getEditableSettings())
  res.json({ homepage: readHomepage(settings, 'homepage'), storefront: readPrefix(settings, 'store') })
}

export async function getAdminSiteSettings(_req: Request, res: Response) {
  const settings = withDraftFallback(await getEditableSettings())
  res.json({
    settings,
    homepage: {
      published: readHomepage(settings, 'homepage'),
      draft: readHomepage(settings, 'homepageDraft'),
      hasUnpublishedChanges: Object.entries(settings).some(([key, value]) => key.startsWith('homepageDraft.') && value !== settings[key.replace('homepageDraft.', 'homepage.')])
    },
    environment: {
      nodeEnv: env.nodeEnv,
      database: databaseLabel(),
      databaseConfigured: Boolean(env.databaseUrl),
      jwtConfigured: Boolean(process.env.JWT_SECRET),
      blobStorageConfigured: Boolean(env.blobToken),
      smtpPasswordConfigured: Boolean(process.env.SMTP_PASSWORD),
      clientOrigin: env.clientOrigin
    }
  })
}

export async function updateAdminSiteSettings(req: Request, res: Response) {
  const allowedKeys = new Set(editableSettingKeys)
  const settings = Object.fromEntries(Object.entries({ ...(req.body.settings as Record<string, string>) })
    .filter(([key, value]) => allowedKeys.has(key) && typeof value === 'string'))
  if (Object.keys(settings).some((key) => key.startsWith('homepageDraft.'))) {
    settings['homepageDraft.meta.updatedAt'] = new Date().toISOString()
  }
  const entries = Object.entries(settings)
  if (entries.length > 0) {
    await prisma.$transaction(entries.map(([key, value]) => prisma.erpSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value }
    })))
  }
  res.json({ settings: withDraftFallback(await getEditableSettings()) })
}

export async function publishHomepageSettings(_req: Request, res: Response) {
  const settings = withDraftFallback(await getEditableSettings())
  const publishedAt = new Date().toISOString()
  const entries = Object.entries(settings)
    .filter(([key]) => key.startsWith('homepageDraft.') && key !== 'homepageDraft.meta.updatedAt')
    .map(([key, value]) => [key.replace('homepageDraft.', 'homepage.'), value] as const)
  entries.push(['homepage.meta.publishedAt', publishedAt])
  await prisma.$transaction(entries.map(([key, value]) => prisma.erpSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value }
  })))
  const next = withDraftFallback(await getEditableSettings())
  res.json({ settings: next, homepage: readHomepage(next, 'homepage') })
}

export async function resetHomepageDraft(_req: Request, res: Response) {
  const settings = withDraftFallback(await getEditableSettings())
  const entries = Object.entries(settings)
    .filter(([key]) => key.startsWith('homepage.'))
    .map(([key, value]) => [key.replace('homepage.', 'homepageDraft.'), value] as const)
  await prisma.$transaction(entries.map(([key, value]) => prisma.erpSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value }
  })))
  res.json({ settings: withDraftFallback(await getEditableSettings()) })
}
