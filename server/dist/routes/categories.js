"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const asyncHandler_1 = require("../middleware/asyncHandler");
const router = (0, express_1.Router)();
router.get('/', (0, asyncHandler_1.asyncHandler)(categoryController_1.listCategoriesController));
exports.default = router;
