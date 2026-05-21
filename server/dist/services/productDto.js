"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productToDto = productToDto;
const money_1 = require("../utils/money");
function productToDto(product) {
    const sortedImages = [...product.images].sort((a, b) => a.sortOrder - b.sortOrder);
    const image = sortedImages[0]?.url || '';
    return {
        id: product.id,
        name: product.name,
        slug: product.slug,
        category: product.category.slug,
        categoryName: product.category.name,
        categoryId: product.categoryId,
        price: (0, money_1.toNumber)(product.price) ?? 0,
        salePrice: (0, money_1.toNumber)(product.salePrice),
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
    };
}
