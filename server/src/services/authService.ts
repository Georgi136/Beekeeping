import bcrypt from 'bcryptjs'
import { AppError } from '../errors/AppError'
import { findUserByEmail } from '../repositories/userRepository'
import { signAdminToken } from '../middleware/auth'

export async function loginAdmin(email: string, password: string) {
  const user = await findUserByEmail(email)
  if (!user) {
    throw new AppError(401, 'Грешен имейл или парола.')
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash)
  if (!validPassword) {
    throw new AppError(401, 'Грешен имейл или парола.')
  }

  const token = signAdminToken({
    id: user.id,
    email: user.email,
    role: user.role
  })

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  }
}
