import { prisma } from '../lib/prisma'

export function createMediaAsset(data: {
  url: string
  pathname?: string
  contentType: string
  size: number
  alt?: string
}) {
  return prisma.mediaAsset.create({ data })
}

export function listMediaAssets() {
  return prisma.mediaAsset.findMany({
    orderBy: { createdAt: 'desc' }
  })
}
