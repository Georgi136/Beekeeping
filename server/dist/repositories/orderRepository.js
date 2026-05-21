"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderInclude = void 0;
exports.createOrder = createOrder;
exports.listOrders = listOrders;
exports.updateOrderStatus = updateOrderStatus;
const prisma_1 = require("../lib/prisma");
exports.orderInclude = {
    items: {
        include: {
            product: {
                include: {
                    images: {
                        orderBy: { sortOrder: 'asc' }
                    }
                }
            }
        }
    }
};
function createOrder(data) {
    return prisma_1.prisma.order.create({
        data,
        include: exports.orderInclude
    });
}
function listOrders() {
    return prisma_1.prisma.order.findMany({
        include: exports.orderInclude,
        orderBy: { createdAt: 'desc' }
    });
}
function updateOrderStatus(id, status) {
    return prisma_1.prisma.order.update({
        where: { id },
        data: { status },
        include: exports.orderInclude
    });
}
