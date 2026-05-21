"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPublicProducts = listPublicProducts;
exports.getPublicProduct = getPublicProduct;
exports.listProductsForAdmin = listProductsForAdmin;
exports.createProductForAdmin = createProductForAdmin;
exports.updateProductForAdmin = updateProductForAdmin;
exports.archiveProductForAdmin = archiveProductForAdmin;
const client_1 = require("@prisma/client");
const productService_1 = require("../services/productService");
const params_1 = require("../utils/params");
async function listPublicProducts(req, res) {
    const products = await (0, productService_1.getPublicProducts)({
        category: typeof req.query.category === 'string' ? req.query.category : undefined,
        featured: req.query.featured === 'true' ? true : undefined,
        status: client_1.ProductStatus.ACTIVE
    });
    res.json(products);
}
async function getPublicProduct(req, res) {
    res.json(await (0, productService_1.getProduct)((0, params_1.firstParam)(req.params.slugOrId), true));
}
async function listProductsForAdmin(_req, res) {
    res.json(await (0, productService_1.getAdminProducts)());
}
async function createProductForAdmin(req, res) {
    res.status(201).json(await (0, productService_1.createProductRecord)(req.body));
}
async function updateProductForAdmin(req, res) {
    res.json(await (0, productService_1.updateProductRecord)(Number(req.params.id), req.body));
}
async function archiveProductForAdmin(req, res) {
    await (0, productService_1.archiveProduct)(Number(req.params.id));
    res.status(204).send();
}
