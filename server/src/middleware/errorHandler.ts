import { Prisma } from '@prisma/client'
import type { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import { AppError } from '../errors/AppError'

export const notFoundHandler: ErrorRequestHandler = (_err, _req, res, _next) => {
  res.status(404).json({ error: 'Маршрутът не е намерен' })
}

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message, code: err.code })
    return
  }

  if (err instanceof ZodError) {
    res.status(400).json({
      error: 'Моля, проверете въведените данни.',
      details: err.flatten()
    })
    return
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      res.status(409).json({ error: 'Вече съществува запис с тези данни.' })
      return
    }
  }

  console.error(err)
  res.status(500).json({ error: 'Възникна неочаквана грешка.' })
}
