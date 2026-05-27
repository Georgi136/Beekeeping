import { ProductStatus, type Prisma } from '../../lib/prismaClient'
import { prisma } from '../../lib/prisma'

export const productInclude = {
  category: true,
  images: {
    orderBy: { sortOrder: 'asc' as const }
  }
}

export async function listProducts(filters: {
  category?: string
  featured?: boolean
  status?: ProductStatus
}) {
  return prisma.product.findMany({
    where: {
      status: filters.status ?? ProductStatus.ACTIVE,
      featured: filters.featured,
      category: filters.category
        ? {
            slug: filters.category
          }
        : undefined
    },
    include: productInclude,
    orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }]
  })
}

export async function listAdminProducts() {
  return prisma.product.findMany({
    include: productInclude,
    orderBy: { updatedAt: 'desc' }
  })
}

export async function findProductBySlugOrId(slugOrId: string) {
  const numericId = Number(slugOrId)
  return prisma.product.findFirst({
    where: Number.isInteger(numericId)
      ? { OR: [{ id: numericId }, { slug: slugOrId }] }
      : { slug: slugOrId },
    include: productInclude
  })
}

export async function createProduct(data: Prisma.ProductCreateInput, images: Prisma.ProductImageCreateManyProductInput[]) {
  return prisma.product.create({
    data: {
      ...data,
      images: {
        create: images
      }
    },
    include: productInclude
  })
}

export async function updateProduct(
  id: number,
  data: Prisma.ProductUpdateInput,
  images?: Prisma.ProductImageCreateManyProductInput[]
) {
  return prisma.$transaction(async (tx) => {
    if (images) {
      await tx.productImage.deleteMany({ where: { productId: id } })
    }

    return tx.product.update({
      where: { id },
      data: {
        ...data,
        images: images
          ? {
              create: images
            }
          : undefined
      },
      include: productInclude
    })
  })
}

export async function deleteProduct(id: number) {
  return prisma.product.update({
    where: { id },
    data: { status: ProductStatus.ARCHIVED }
  })
}
