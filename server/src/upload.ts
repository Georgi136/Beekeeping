import multer from 'multer'

const MAX_IMAGE_SIZE = 5 * 1024 * 1024

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_IMAGE_SIZE
  },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Можете да качвате само изображения'))
      return
    }

    cb(null, true)
  }
})
