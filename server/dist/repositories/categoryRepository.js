"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategories = listCategories;
exports.createCategory = createCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
const prisma_1 = require("../lib/prisma");
function listCategories() {
    return prisma_1.prisma.category.findMany({
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }]
    });
}
function createCategory(data) {
    return prisma_1.prisma.category.create({ data });
}
function updateCategory(id, data) {
    return prisma_1.prisma.category.update({
        where: { id },
        data
    });
}
function deleteCategory(id) {
    return prisma_1.prisma.category.delete({ where: { id } });
}
