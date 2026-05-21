"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicProducts = getPublicProducts;
exports.getAdminProducts = getAdminProducts;
exports.getProduct = getProduct;
exports.createProductRecord = createProductRecord;
exports.updateProductRecord = updateProductRecord;
exports.archiveProduct = archiveProduct;
const client_1 = require("@prisma/client");
const AppError_1 = require("../errors/AppError");
const productRepository_1 = require("../repositories/productRepository");
const slug_1 = require("../utils/slug");
const money_1 = require("../utils/money");
const productDto_1 = require("./productDto");
function mapImages(input, fallbackAlt) {
    return input.map((image, index) => ({
        url: image.url,
        alt: image.alt || fallbackAlt,
        sortOrder: image.sortOrder ?? index
    }));
}
function mapProductInput(input) {
    return {
        name: input.name,
        slug: input.slug ? (0, slug_1.makeSlug)(input.slug) : (0, slug_1.makeSlug)(input.name),
        shortDescription: input.shortDescription || input.description.slice(0, 180),
        description: input.description,
        price: (0, money_1.toDecimal)(input.price) ?? 0,
        salePrice: (0, money_1.toDecimal)(input.salePrice),
        stock: input.stock,
        status: input.status,
        featured: input.featured,
        seoTitle: input.seoTitle || `${input.name} | САКИ`,
        seoDescription: input.seoDescription || input.shortDescription || input.description.slice(0, 160),
        category: {
            connect: { id: input.categoryId }
        }
    };
}
async function getPublicProducts(filters) {
    const products = await (0, productRepository_1.listProducts)(filters);
    return products.map(productDto_1.productToDto);
}
async function getAdminProducts() {
    const products = await (0, productRepository_1.listAdminProducts)();
    return products.map(productDto_1.productToDto);
}
async function getProduct(slugOrId, publicOnly = true) {
    const product = await (0, productRepository_1.findProductBySlugOrId)(slugOrId);
    if (!product || (publicOnly && product.status !== client_1.ProductStatus.ACTIVE)) {
        throw new AppError_1.AppError(404, 'Продуктът не е намерен');
    }
    return (0, productDto_1.productToDto)(product);
}
async function createProductRecord(input) {
    const product = await (0, productRepository_1.createProduct)(mapProductInput(input), mapImages(input.images, input.name));
    return (0, productDto_1.productToDto)(product);
}
async function updateProductRecord(id, input) {
    const data = mapProductInput(input);
    const product = await (0, productRepository_1.updateProduct)(id, {
        ...data,
        category: {
            connect: { id: input.categoryId }
        }
    }, mapImages(input.images, input.name));
    return (0, productDto_1.productToDto)(product);
}
async function archiveProduct(id) {
    await (0, productRepository_1.deleteProduct)(id);
}
