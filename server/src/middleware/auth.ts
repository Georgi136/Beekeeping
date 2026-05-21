import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { env } from '../config/env'
import { AppError } from '../errors/AppError'

interface TokenPayload {
  id: number
  email: string
  role: 'ADMIN'
}

export function signAdminToken(payload: TokenPayload) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: '8h' })
}

function readToken(req: Request) {
  const authHeader = req.headers.authorization
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.substring('Bearer '.length)
  }
  return req.cookies?.admin_token
}

export function requireAdmin(req: Request, _res: Response, next: NextFunction) {
  const token = readToken(req)
  if (!token) {
    next(new AppError(401, 'Необходимо е да влезете в админ панела.'))
    return
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret) as TokenPayload
    if (payload.role !== 'ADMIN') {
      next(new AppError(403, 'Нямате права за тази операция.'))
      return
    }

    req.user = payload
    next()
  } catch {
    next(new AppError(401, 'Сесията е изтекла. Моля, влезте отново.'))
  }
}
