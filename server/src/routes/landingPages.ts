import { Router } from 'express'
import {
  getPublicLandingPage,
  listPublicLandingPages
} from '../controllers/landingPageController'
import { asyncHandler } from '../middleware/asyncHandler'

const router = Router()

router.get('/', asyncHandler(listPublicLandingPages))
router.get('/:slug', asyncHandler(getPublicLandingPage))

export default router
