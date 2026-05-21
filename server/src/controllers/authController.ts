import type { Request, Response } from 'express'
import { env } from '../config/env'
import { loginAdmin } from '../services/authService'

export async function login(req: Request, res: Response) {
  const { email, password } = req.body
  const result = await loginAdmin(email, password)

  res.cookie('admin_token', result.token, {
    httpOnly: true,
    secure: env.isProduction,
    sameSite: 'lax',
    maxAge: 8 * 60 * 60 * 1000
  })

  res.json(result)
}

export async function logout(_req: Request, res: Response) {
  res.clearCookie('admin_token')
  res.json({ ok: true })
}

export async function me(req: Request, res: Response) {
  res.json({ user: req.user })
}
