import { Router } from 'express'
import {
  archiveProductForAdmin,
  createProductForAdmin,
  listProductsForAdmin,
  updateProductForAdmin
} from '../controllers/productController'
import {
  createCategoryController,
  deleteCategoryController,
  listCategoriesController,
  updateCategoryController
} from '../controllers/categoryController'
import { listMediaController, uploadMediaController } from '../controllers/mediaController'
import { listOrdersController, updateOrderStatusController } from '../controllers/orderController'
import {
  createPromotionController,
  deletePromotionController,
  listAdminPromotions,
  updatePromotionController
} from '../controllers/promotionController'
import {
  archiveLandingPageController,
  createLandingPageController,
  listAdminLandingPages,
  updateLandingPageController
} from '../controllers/landingPageController'
import { asyncHandler } from '../middleware/asyncHandler'
import { requireAdmin } from '../middleware/auth'
import { validateBody } from '../middleware/validate'
import { upload } from '../upload'
import { categoryUpsertSchema, productUpsertSchema } from '../validators/products'
import { promotionUpsertSchema } from '../validators/promotions'
import { landingPageUpsertSchema } from '../validators/landingPages'
import { updateOrderStatusSchema } from '../validators/orders'

const router = Router()

router.use(requireAdmin)

router.get('/products', asyncHandler(listProductsForAdmin))
router.post('/products', validateBody(productUpsertSchema), asyncHandler(createProductForAdmin))
router.put('/products/:id', validateBody(productUpsertSchema), asyncHandler(updateProductForAdmin))
router.delete('/products/:id', asyncHandler(archiveProductForAdmin))

router.get('/categories', asyncHandler(listCategoriesController))
router.post('/categories', validateBody(categoryUpsertSchema), asyncHandler(createCategoryController))
router.put('/categories/:id', validateBody(categoryUpsertSchema), asyncHandler(updateCategoryController))
router.delete('/categories/:id', asyncHandler(deleteCategoryController))

router.get('/promotions', asyncHandler(listAdminPromotions))
router.post('/promotions', validateBody(promotionUpsertSchema), asyncHandler(createPromotionController))
router.put('/promotions/:id', validateBody(promotionUpsertSchema), asyncHandler(updatePromotionController))
router.delete('/promotions/:id', asyncHandler(deletePromotionController))

router.get('/landing-pages', asyncHandler(listAdminLandingPages))
router.post('/landing-pages', validateBody(landingPageUpsertSchema), asyncHandler(createLandingPageController))
router.put('/landing-pages/:id', validateBody(landingPageUpsertSchema), asyncHandler(updateLandingPageController))
router.delete('/landing-pages/:id', asyncHandler(archiveLandingPageController))

router.get('/orders', asyncHandler(listOrdersController))
router.put('/orders/:id/status', validateBody(updateOrderStatusSchema), asyncHandler(updateOrderStatusController))

router.get('/media', asyncHandler(listMediaController))
router.post('/media', upload.single('file'), asyncHandler(uploadMediaController))

export default router
