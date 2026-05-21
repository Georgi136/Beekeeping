import type { ProductWithRelations } from '../repositories/productRepository'
import { toNumber } from '../utils/money'

export function productToDto(product: ProductWithRelations) {
  const sortedImages = [...product.images].sort((a, b) => a.sortOrder - b.sortOrder)
  const image = sortedImages[0]?.url || ''

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    category: product.category.slug,
    categoryName: product.category.name,
    categoryId: product.categoryId,
    price: toNumber(product.price) ?? 0,
    salePrice: toNumber(product.salePrice),
    image,
    images: sortedImages.map((item) => ({
      id: item.id,
      url: item.url,
      alt: item.alt,
      sortOrder: item.sortOrder
    })),
    shortDescription: product.shortDescription,
    description: product.description,
    stock: product.stock,
    status: product.status,
    featured: product.featured,
    seoTitle: product.seoTitle,
    seoDescription: product.seoDescription,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt
  }
}
