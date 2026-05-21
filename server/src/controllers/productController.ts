import type { Request, Response } from 'express'
import { ProductStatus } from '@prisma/client'
import {
  archiveProduct,
  createProductRecord,
  getAdminProducts,
  getProduct,
  getPublicProducts,
  updateProductRecord
} from '../services/productService'
import { firstParam } from '../utils/params'

export async function listPublicProducts(req: Request, res: Response) {
  const products = await getPublicProducts({
    category: typeof req.query.category === 'string' ? req.query.category : undefined,
    featured: req.query.featured === 'true' ? true : undefined,
    status: ProductStatus.ACTIVE
  })
  res.json(products)
}

export async function getPublicProduct(req: Request, res: Response) {
  res.json(await getProduct(firstParam(req.params.slugOrId), true))
}

export async function listProductsForAdmin(_req: Request, res: Response) {
  res.json(await getAdminProducts())
}

export async function createProductForAdmin(req: Request, res: Response) {
  res.status(201).json(await createProductRecord(req.body))
}

export async function updateProductForAdmin(req: Request, res: Response) {
  res.json(await updateProductRecord(Number(req.params.id), req.body))
}

export async function archiveProductForAdmin(req: Request, res: Response) {
  await archiveProduct(Number(req.params.id))
  res.status(204).send()
}
