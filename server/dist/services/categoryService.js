"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = getCategories;
exports.createCategoryRecord = createCategoryRecord;
exports.updateCategoryRecord = updateCategoryRecord;
exports.deleteCategoryRecord = deleteCategoryRecord;
const categoryRepository_1 = require("../repositories/categoryRepository");
const slug_1 = require("../utils/slug");
function mapCategoryInput(input) {
    return {
        name: input.name,
        slug: input.slug ? (0, slug_1.makeSlug)(input.slug) : (0, slug_1.makeSlug)(input.name),
        description: input.description || null,
        sortOrder: input.sortOrder
    };
}
async function getCategories() {
    return (0, categoryRepository_1.listCategories)();
}
function createCategoryRecord(input) {
    return (0, categoryRepository_1.createCategory)(mapCategoryInput(input));
}
function updateCategoryRecord(id, input) {
    return (0, categoryRepository_1.updateCategory)(id, mapCategoryInput(input));
}
function deleteCategoryRecord(id) {
    return (0, categoryRepository_1.deleteCategory)(id);
}
