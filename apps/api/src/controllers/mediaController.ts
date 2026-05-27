import type { Request, Response } from 'express'
import { AppError } from '../errors/AppError'
import { getMediaLibrary, saveMedia } from '../services/mediaService'

interface MulterRequest extends Request {
  file?: Express.Multer.File
}

export async function uploadMediaController(req: MulterRequest, res: Response) {
  if (!req.file) {
    throw new AppError(400, 'Моля, изберете изображение.')
  }

  const asset = await saveMedia(req.file, typeof req.body.alt === 'string' ? req.body.alt : undefined)
  res.status(201).json(asset)
}

export async function listMediaController(_req: Request, res: Response) {
  res.json(await getMediaLibrary())
}
