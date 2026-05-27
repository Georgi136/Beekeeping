import type { UserRole } from '../lib/prismaClient'

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number
        email: string
        role: UserRole
      }
    }
  }
}

export {}
