"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../data");
const router = (0, express_1.Router)();
// POST create new order
router.post('/', (req, res) => {
    const { customerName, phone, address, items, totalPrice } = req.body;
    // Validate required fields
    if (!customerName || !phone || !address || !items || items.length === 0) {
        return res.status(400).json({
            error: 'Missing required fields: customerName, phone, address, items'
        });
    }
    if (typeof totalPrice !== 'number' || totalPrice <= 0) {
        return res.status(400).json({
            error: 'Invalid totalPrice'
        });
    }
    // Create order
    const order = {
        id: Date.now().toString(),
        customerName,
        phone,
        address,
        items,
        totalPrice,
        createdAt: new Date().toISOString()
    };
    const savedOrder = (0, data_1.addOrder)(order);
    res.status(201).json({
        message: 'Order created successfully',
        order: savedOrder
    });
});
// GET all orders (for admin, no auth)
router.get('/', (_req, res) => {
    // In production, this would require authentication
    res.json({
        message: 'All orders',
        count: (0, data_1.getOrders)().length,
        orders: (0, data_1.getOrders)()
    });
});
exports.default = router;
