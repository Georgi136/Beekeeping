"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const landingPageController_1 = require("../controllers/landingPageController");
const asyncHandler_1 = require("../middleware/asyncHandler");
const router = (0, express_1.Router)();
router.get('/', (0, asyncHandler_1.asyncHandler)(landingPageController_1.listPublicLandingPages));
router.get('/:slug', (0, asyncHandler_1.asyncHandler)(landingPageController_1.getPublicLandingPage));
exports.default = router;
