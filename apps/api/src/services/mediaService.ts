import { put } from '@vercel/blob'
import fs from 'fs/promises'
import path from 'path'
import { env } from '../config/env'
import { uploadsDir } from '../paths'
import { createMediaAsset, listMediaAssets } from '../repositories/mediaRepository'

function safeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9._-]/g, '-')
}

export async function saveMedia(file: Express.Multer.File, alt?: string) {
  const filename = `${Date.now()}-${safeFilename(file.originalname)}`
  let url: string
  let pathname: string | undefined

  if (env.blobToken) {
    const blob = await put(`products/${filename}`, file.buffer, {
      access: 'public',
      token: env.blobToken,
      contentType: file.mimetype
    })
    url = blob.url
    pathname = blob.pathname
  } else {
    await fs.mkdir(uploadsDir, { recursive: true })
    const target = path.join(uploadsDir, filename)
    await fs.writeFile(target, file.buffer)
    url = `/uploads/${filename}`
    pathname = filename
  }

  return createMediaAsset({
    url,
    pathname,
    contentType: file.mimetype,
    size: file.size,
    alt
  })
}

export function getMediaLibrary() {
  return listMediaAssets()
}
