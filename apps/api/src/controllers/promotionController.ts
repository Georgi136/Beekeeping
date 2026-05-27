import type { Request, Response } from 'express'
import {
  createPromotionRecord,
  deletePromotionRecord,
  getPromotions,
  updatePromotionRecord
} from '../services/promotionService'

export async function listPublicPromotions(_req: Request, res: Response) {
  res.json(await getPromotions(false))
}

export async function listAdminPromotions(_req: Request, res: Response) {
  res.json(await getPromotions(true))
}

export async function createPromotionController(req: Request, res: Response) {
  res.status(201).json(await createPromotionRecord(req.body))
}

export async function updatePromotionController(req: Request, res: Response) {
  res.json(await updatePromotionRecord(Number(req.params.id), req.body))
}

export async function deletePromotionController(req: Request, res: Response) {
  await deletePromotionRecord(Number(req.params.id))
  res.status(204).send()
}
