import { joinApiUrl, normalizeUploadedImageForForm, resolveUploadedImage } from '../../../packages/shared/src/api'

const configuredApiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '')

export const API_BASE_URL = configuredApiUrl ?? (import.meta.env.DEV ? 'http://localhost:3001' : '')

export const DEFAULT_PRODUCT_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 320 240%22%3E%3Crect width=%22320%22 height=%22240%22 fill=%22%23f6f8fb%22/%3E%3Ctext x=%22160%22 y=%22120%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%2C sans-serif%22 font-size=%2220%22 fill=%22%23999%22%3E%D0%91%D0%B5%D0%B7%20%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%3C/text%3E%3C/svg%3E'

export function resolveProductImage(image: string) {
  return resolveUploadedImage(API_BASE_URL, image, DEFAULT_PRODUCT_IMAGE)
}

export function normalizeProductImageForForm(image: string) {
  return normalizeUploadedImageForForm(API_BASE_URL, image)
}

export function apiUrl(path: string) {
  return joinApiUrl(API_BASE_URL, path)
}
