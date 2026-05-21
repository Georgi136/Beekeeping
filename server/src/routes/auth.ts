import { Router } from 'express'
import { login, logout, me } from '../controllers/authController'
import { asyncHandler } from '../middleware/asyncHandler'
import { requireAdmin } from '../middleware/auth'
import { validateBody } from '../middleware/validate'
import { loginSchema } from '../validators/auth'

const router = Router()

router.post('/login', validateBody(loginSchema), asyncHandler(login))
router.post('/logout', asyncHandler(logout))
router.get('/me', requireAdmin, asyncHandler(me))

export default router
