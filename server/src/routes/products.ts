import { Router } from 'express'
import {
  getPublicProduct,
  listPublicProducts
} from '../controllers/productController'
import { asyncHandler } from '../middleware/asyncHandler'

const router = Router()

router.get('/', asyncHandler(listPublicProducts))
router.get('/:slugOrId', asyncHandler(getPublicProduct))

export default router
