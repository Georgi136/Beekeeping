import { z } from 'zod'

export const updateSiteSettingsSchema = z.object({
  settings: z.record(z.string(), z.string().max(20000))
})
