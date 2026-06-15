import { Router } from 'express'
import { getAdminSiteSettings, getPublicSiteSettings, publishHomepageSettings, resetHomepageDraft, updateAdminSiteSettings } from './siteSettings.controller'
import { asyncHandler } from '../../middleware/asyncHandler'
import { requireRole } from '../../middleware/auth'
import { validateBody } from '../../middleware/validate'
import { updateSiteSettingsSchema } from './siteSettings.validator'

export const publicSiteSettingsRouter = Router()
publicSiteSettingsRouter.get('/', asyncHandler(getPublicSiteSettings))

export const adminSiteSettingsRouter = Router()
adminSiteSettingsRouter.use(requireRole(['ADMIN']))
adminSiteSettingsRouter.get('/', asyncHandler(getAdminSiteSettings))
adminSiteSettingsRouter.put('/', validateBody(updateSiteSettingsSchema), asyncHandler(updateAdminSiteSettings))
adminSiteSettingsRouter.post('/homepage/publish', asyncHandler(publishHomepageSettings))
adminSiteSettingsRouter.post('/homepage/reset-draft', asyncHandler(resetHomepageDraft))
