"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productInclude = void 0;
exports.listProducts = listProducts;
exports.listAdminProducts = listAdminProducts;
exports.findProductBySlugOrId = findProductBySlugOrId;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
const client_1 = require("@prisma/client");
const prisma_1 = require("../lib/prisma");
exports.productInclude = {
    category: true,
    images: {
        orderBy: { sortOrder: 'asc' }
    }
};
async function listProducts(filters) {
    return prisma_1.prisma.product.findMany({
        where: {
            status: filters.status ?? client_1.ProductStatus.ACTIVE,
            featured: filters.featured,
            category: filters.category
                ? {
                    slug: filters.category
                }
                : undefined
        },
        include: exports.productInclude,
        orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }]
    });
}
async function listAdminProducts() {
    return prisma_1.prisma.product.findMany({
        include: exports.productInclude,
        orderBy: { updatedAt: 'desc' }
    });
}
async function findProductBySlugOrId(slugOrId) {
    const numericId = Number(slugOrId);
    return prisma_1.prisma.product.findFirst({
        where: Number.isInteger(numericId)
            ? { OR: [{ id: numericId }, { slug: slugOrId }] }
            : { slug: slugOrId },
        include: exports.productInclude
    });
}
async function createProduct(data, images) {
    return prisma_1.prisma.product.create({
        data: {
            ...data,
            images: {
                create: images
            }
        },
        include: exports.productInclude
    });
}
async function updateProduct(id, data, images) {
    return prisma_1.prisma.$transaction(async (tx) => {
        if (images) {
            await tx.productImage.deleteMany({ where: { productId: id } });
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
            include: exports.productInclude
        });
    });
}
async function deleteProduct(id) {
    return prisma_1.prisma.product.update({
        where: { id },
        data: { status: client_1.ProductStatus.ARCHIVED }
    });
}
