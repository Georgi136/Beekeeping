"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerOrder = createCustomerOrder;
exports.getAdminOrders = getAdminOrders;
exports.setOrderStatus = setOrderStatus;
const client_1 = require("@prisma/client");
const AppError_1 = require("../errors/AppError");
const prisma_1 = require("../lib/prisma");
const orderRepository_1 = require("../repositories/orderRepository");
const money_1 = require("../utils/money");
function orderToDto(order) {
    return {
        id: order.id,
        customerName: order.customerName,
        phone: order.phone,
        email: order.email,
        address: order.address,
        notes: order.notes,
        status: order.status,
        totalPrice: (0, money_1.toNumber)(order.totalPrice),
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        items: order.items.map((item) => ({
            id: item.id,
            productId: item.productId,
            name: item.name,
            price: (0, money_1.toNumber)(item.price),
            quantity: item.quantity,
            image: item.product?.images[0]?.url || ''
        }))
    };
}
async function createCustomerOrder(input) {
    const productIds = input.items.map((item) => item.productId);
    const products = await prisma_1.prisma.product.findMany({
        where: {
            id: { in: productIds },
            status: 'ACTIVE'
        }
    });
    if (products.length !== productIds.length) {
        throw new AppError_1.AppError(400, 'Някои от избраните продукти вече не са налични.');
    }
    const productMap = new Map(products.map((product) => [product.id, product]));
    const items = input.items.map((item) => {
        const product = productMap.get(item.productId);
        if (!product) {
            throw new AppError_1.AppError(400, 'Продуктът не е намерен.');
        }
        if (product.stock < item.quantity) {
            throw new AppError_1.AppError(400, `Няма достатъчна наличност от "${product.name}".`);
        }
        const price = product.salePrice ?? product.price;
        return {
            product,
            quantity: item.quantity,
            price
        };
    });
    const total = items.reduce((sum, item) => sum.add(item.price.mul(item.quantity)), new client_1.Prisma.Decimal(0));
    const order = await prisma_1.prisma.$transaction(async (tx) => {
        for (const item of items) {
            await tx.product.update({
                where: { id: item.product.id },
                data: {
                    stock: {
                        decrement: item.quantity
                    }
                }
            });
        }
        return tx.order.create({
            data: {
                customerName: input.customerName,
                phone: input.phone,
                email: input.email || null,
                address: input.address,
                notes: input.notes || null,
                totalPrice: total,
                items: {
                    create: items.map((item) => ({
                        productId: item.product.id,
                        name: item.product.name,
                        price: item.price,
                        quantity: item.quantity
                    }))
                }
            },
            include: orderRepository_1.orderInclude
        });
    });
    return orderToDto(order);
}
async function getAdminOrders() {
    const orders = await (0, orderRepository_1.listOrders)();
    return orders.map(orderToDto);
}
async function setOrderStatus(id, status) {
    const order = await (0, orderRepository_1.updateOrderStatus)(id, status);
    return orderToDto(order);
}
