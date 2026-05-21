import { Router } from 'express'
import { listPublicPromotions } from '../controllers/promotionController'
import { asyncHandler } from '../middleware/asyncHandler'

const router = Router()

router.get('/', asyncHandler(listPublicPromotions))

export default router
