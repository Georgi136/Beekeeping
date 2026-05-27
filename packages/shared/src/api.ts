export function joinApiUrl(baseUrl: string, path: string) {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function resolveUploadedImage(baseUrl: string, image: string, fallbackImage: string) {
  if (!image) return fallbackImage

  const trimmed = image.trim()
  if (trimmed.startsWith('/uploads/')) {
    return `${baseUrl}${trimmed}`
  }

  if (trimmed.startsWith('uploads/')) {
    return `${baseUrl}/${trimmed}`
  }

  if (trimmed.startsWith(`${baseUrl}/uploads/`)) {
    return trimmed
  }

  if (/^https?:\/\//.test(trimmed)) {
    return trimmed
  }

  return trimmed
}

export function normalizeUploadedImageForForm(baseUrl: string, image: string) {
  if (!image) return ''
  return image.startsWith(baseUrl) ? image.substring(baseUrl.length) : image
}
