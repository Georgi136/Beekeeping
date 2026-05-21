"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPublicPromotions = listPublicPromotions;
exports.listAdminPromotions = listAdminPromotions;
exports.createPromotionController = createPromotionController;
exports.updatePromotionController = updatePromotionController;
exports.deletePromotionController = deletePromotionController;
const promotionService_1 = require("../services/promotionService");
async function listPublicPromotions(_req, res) {
    res.json(await (0, promotionService_1.getPromotions)(false));
}
async function listAdminPromotions(_req, res) {
    res.json(await (0, promotionService_1.getPromotions)(true));
}
async function createPromotionController(req, res) {
    res.status(201).json(await (0, promotionService_1.createPromotionRecord)(req.body));
}
async function updatePromotionController(req, res) {
    res.json(await (0, promotionService_1.updatePromotionRecord)(Number(req.params.id), req.body));
}
async function deletePromotionController(req, res) {
    await (0, promotionService_1.deletePromotionRecord)(Number(req.params.id));
    res.status(204).send();
}
