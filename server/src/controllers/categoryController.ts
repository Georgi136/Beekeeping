import type { Request, Response } from 'express'
import {
  createCategoryRecord,
  deleteCategoryRecord,
  getCategories,
  updateCategoryRecord
} from '../services/categoryService'

export async function listCategoriesController(_req: Request, res: Response) {
  res.json(await getCategories())
}

export async function createCategoryController(req: Request, res: Response) {
  res.status(201).json(await createCategoryRecord(req.body))
}

export async function updateCategoryController(req: Request, res: Response) {
  res.json(await updateCategoryRecord(Number(req.params.id), req.body))
}

export async function deleteCategoryController(req: Request, res: Response) {
  await deleteCategoryRecord(Number(req.params.id))
  res.status(204).send()
}
