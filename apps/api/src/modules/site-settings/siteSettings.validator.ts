import { z } from 'zod'
import { editableSettingKeys } from './siteSettings.constants'

export const updateSiteSettingsSchema = z.object({
  settings: z.record(z.string(), z.string().max(5000))
}).superRefine((value, context) => {
  const allowed = new Set(editableSettingKeys)
  for (const key of Object.keys(value.settings)) {
    if (!allowed.has(key)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Unsupported setting: ${key}`,
        path: ['settings', key]
      })
    }
  }
})
