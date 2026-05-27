import { Router } from 'express'
import { listCategoriesController } from '../controllers/categoryController'
import { asyncHandler } from '../middleware/asyncHandler'

const router = Router()

router.get('/', asyncHandler(listCategoriesController))

export default router
