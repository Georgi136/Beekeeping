import {
  createCategory,
  deleteCategory,
  listCategories,
  updateCategory
} from '../repositories/categoryRepository'
import { makeSlug } from '../utils/slug'

interface CategoryInput {
  name: string
  slug?: string
  description?: string | null
  sortOrder: number
}

function mapCategoryInput(input: CategoryInput) {
  return {
    name: input.name,
    slug: input.slug ? makeSlug(input.slug) : makeSlug(input.name),
    description: input.description || null,
    sortOrder: input.sortOrder
  }
}

export async function getCategories() {
  return listCategories()
}

export function createCategoryRecord(input: CategoryInput) {
  return createCategory(mapCategoryInput(input))
}

export function updateCategoryRecord(id: number, input: CategoryInput) {
  return updateCategory(id, mapCategoryInput(input))
}

export function deleteCategoryRecord(id: number) {
  return deleteCategory(id)
}
