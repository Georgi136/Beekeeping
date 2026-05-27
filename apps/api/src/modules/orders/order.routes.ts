import { Router } from 'express'
import { createOrderController } from './order.controller'
import { asyncHandler } from '../../middleware/asyncHandler'
import { validateBody } from '../../middleware/validate'
import { createOrderSchema } from './order.validator'

const router = Router()

router.post('/', validateBody(createOrderSchema), asyncHandler(createOrderController))

export default router
