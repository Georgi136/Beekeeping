"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const asyncHandler_1 = require("../middleware/asyncHandler");
const router = (0, express_1.Router)();
router.get('/', (0, asyncHandler_1.asyncHandler)(productController_1.listPublicProducts));
router.get('/:slugOrId', (0, asyncHandler_1.asyncHandler)(productController_1.getPublicProduct));
exports.default = router;
