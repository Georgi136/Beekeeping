import { ProductStatus, type Prisma } from '../../lib/prismaClient'
import { AppError } from '../../errors/AppError'
import {
  createProduct,
  deleteProduct,
  findProductBySlugOrId,
  listAdminProducts,
  listProducts,
  updateProduct
} from './product.repository'
import { makeSlug } from '../../utils/slug'
import { toDecimal } from '../../utils/money'
import { productToDto, type ProductInput } from './product.types'

function mapImages(input: ProductInput['images'], fallbackAlt: string): Prisma.ProductImageCreateManyProductInput[] {
  return input.map((image, index) => ({
    url: image.url,
    alt: image.alt || fallbackAlt,
    sortOrder: image.sortOrder ?? index
  }))
}

function plainTextFromHtml(value: string) {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function mapProductInput(input: ProductInput): Prisma.ProductCreateInput {
  const descriptionText = plainTextFromHtml(input.description) || input.name

  return {
    name: input.name,
    slug: input.slug ? makeSlug(input.slug) : makeSlug(input.name),
    shortDescription: input.shortDescription || descriptionText.slice(0, 180),
    description: input.description,
    price: toDecimal(input.price) ?? 0,
    salePrice: toDecimal(input.salePrice),
    stock: input.stock,
    status: input.status,
    featured: input.featured,
    seoTitle: input.seoTitle || `${input.name} | САКИ`,
    seoDescription: input.seoDescription || input.shortDescription || descriptionText.slice(0, 160),
    category: {
      connect: { id: input.categoryId }
    },
    erpProduct: input.erpProductId
      ? { connect: { id: input.erpProductId } }
      : undefined
  }
}

export async function getPublicProducts(filters: {
  category?: string
  featured?: boolean
  status?: ProductStatus
}) {
  const products = await listProducts(filters)
  return products.map(productToDto)
}

export async function getAdminProducts() {
  const products = await listAdminProducts()
  return products.map(productToDto)
}

export async function getProduct(slugOrId: string, publicOnly = true) {
  const product = await findProductBySlugOrId(slugOrId)
  if (!product || (publicOnly && product.status !== ProductStatus.ACTIVE)) {
    throw new AppError(404, 'Продуктът не е намерен')
  }

  return productToDto(product)
}

export async function createProductRecord(input: ProductInput) {
  const product = await createProduct(mapProductInput(input), mapImages(input.images, input.name))
  return productToDto(product)
}

export async function updateProductRecord(id: number, input: ProductInput) {
  const data = mapProductInput(input)
  const product = await updateProduct(
    id,
    {
      ...data,
      category: {
        connect: { id: input.categoryId }
      },
      erpProduct: input.erpProductId
        ? { connect: { id: input.erpProductId } }
        : { disconnect: true }
    },
    mapImages(input.images, input.name)
  )
  return productToDto(product)
}

export async function archiveProduct(id: number) {
  await deleteProduct(id)
}
