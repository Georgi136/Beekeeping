"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const promotionController_1 = require("../controllers/promotionController");
const asyncHandler_1 = require("../middleware/asyncHandler");
const router = (0, express_1.Router)();
router.get('/', (0, asyncHandler_1.asyncHandler)(promotionController_1.listPublicPromotions));
exports.default = router;
