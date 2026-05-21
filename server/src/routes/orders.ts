import { Router } from 'express'
import { createOrderController } from '../controllers/orderController'
import { asyncHandler } from '../middleware/asyncHandler'
import { validateBody } from '../middleware/validate'
import { createOrderSchema } from '../validators/orders'

const router = Router()

router.post('/', validateBody(createOrderSchema), asyncHandler(createOrderController))

export default router
