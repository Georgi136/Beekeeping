"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategoriesController = listCategoriesController;
exports.createCategoryController = createCategoryController;
exports.updateCategoryController = updateCategoryController;
exports.deleteCategoryController = deleteCategoryController;
const categoryService_1 = require("../services/categoryService");
async function listCategoriesController(_req, res) {
    res.json(await (0, categoryService_1.getCategories)());
}
async function createCategoryController(req, res) {
    res.status(201).json(await (0, categoryService_1.createCategoryRecord)(req.body));
}
async function updateCategoryController(req, res) {
    res.json(await (0, categoryService_1.updateCategoryRecord)(Number(req.params.id), req.body));
}
async function deleteCategoryController(req, res) {
    await (0, categoryService_1.deleteCategoryRecord)(Number(req.params.id));
    res.status(204).send();
}
