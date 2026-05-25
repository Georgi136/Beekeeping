import type { NextFunction, Request, Response } from 'express'
import type { UserRole } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { env } from '../config/env'
import { AppError } from '../errors/AppError'

interface TokenPayload {
  id: number
  email: string
  role: UserRole
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

function readUser(req: Request) {
  const token = readToken(req)
  if (!token) {
    throw new AppError(401, 'Необходимо е да влезете в админ панела.')
  }

  try {
    return jwt.verify(token, env.jwtSecret) as TokenPayload
  } catch {
    throw new AppError(401, 'Сесията е изтекла. Моля, влезте отново.')
  }
}

export function requireAuthenticated(req: Request, _res: Response, next: NextFunction) {
  try {
    req.user = readUser(req)
    next()
  } catch (err) {
    next(err)
  }
}

export function requireRole(roles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      const user = readUser(req)
      if (!roles.includes(user.role)) {
        next(new AppError(403, 'Нямате права за тази операция.'))
        return
      }

      req.user = user
      next()
    } catch (err) {
      next(err)
    }
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  return requireRole(['ADMIN'])(req, res, next)
}
