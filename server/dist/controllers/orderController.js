"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderController = createOrderController;
exports.listOrdersController = listOrdersController;
exports.updateOrderStatusController = updateOrderStatusController;
const orderService_1 = require("../services/orderService");
const params_1 = require("../utils/params");
async function createOrderController(req, res) {
    const order = await (0, orderService_1.createCustomerOrder)(req.body);
    res.status(201).json({
        message: 'Поръчката е приета успешно.',
        order
    });
}
async function listOrdersController(_req, res) {
    const orders = await (0, orderService_1.getAdminOrders)();
    res.json({ count: orders.length, orders });
}
async function updateOrderStatusController(req, res) {
    res.json(await (0, orderService_1.setOrderStatus)((0, params_1.firstParam)(req.params.id), req.body.status));
}
