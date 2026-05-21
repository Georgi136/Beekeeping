import type { Request, Response } from 'express'
import {
  archiveLandingPage,
  createLandingPageRecord,
  getLandingPage,
  getLandingPages,
  updateLandingPageRecord
} from '../services/landingPageService'
import { firstParam } from '../utils/params'

export async function listPublicLandingPages(_req: Request, res: Response) {
  res.json(await getLandingPages(false))
}

export async function getPublicLandingPage(req: Request, res: Response) {
  res.json(await getLandingPage(firstParam(req.params.slug), false))
}

export async function listAdminLandingPages(_req: Request, res: Response) {
  res.json(await getLandingPages(true))
}

export async function createLandingPageController(req: Request, res: Response) {
  res.status(201).json(await createLandingPageRecord(req.body))
}

export async function updateLandingPageController(req: Request, res: Response) {
  res.json(await updateLandingPageRecord(Number(req.params.id), req.body))
}

export async function archiveLandingPageController(req: Request, res: Response) {
  await archiveLandingPage(Number(req.params.id))
  res.status(204).send()
}
