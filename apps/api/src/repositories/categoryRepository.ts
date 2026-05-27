import { Prisma } from '@prisma/client'
import { prisma } from '../lib/prisma'

export function listCategories() {
  return prisma.category.findMany({
    orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }]
  })
}

export function createCategory(data: Prisma.CategoryCreateInput) {
  return prisma.category.create({ data })
}

export function updateCategory(id: number, data: Prisma.CategoryUpdateInput) {
  return prisma.category.update({
    where: { id },
    data
  })
}

export function deleteCategory(id: number) {
  return prisma.category.delete({ where: { id } })
}
