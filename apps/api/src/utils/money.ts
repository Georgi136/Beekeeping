import { Prisma } from '../lib/prismaClient'

export function toNumber(value: Prisma.Decimal | number | string | null | undefined) {
  if (value === null || value === undefined) return null
  if (typeof value === 'number') return value
  if (typeof value === 'string') return Number(value)
  return value.toNumber()
}

export function toDecimal(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === '') return null
  return new Prisma.Decimal(value)
}
