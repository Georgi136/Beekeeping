"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMediaController = uploadMediaController;
exports.listMediaController = listMediaController;
const AppError_1 = require("../errors/AppError");
const mediaService_1 = require("../services/mediaService");
async function uploadMediaController(req, res) {
    if (!req.file) {
        throw new AppError_1.AppError(400, 'Моля, изберете изображение.');
    }
    const asset = await (0, mediaService_1.saveMedia)(req.file, typeof req.body.alt === 'string' ? req.body.alt : undefined);
    res.status(201).json(asset);
}
async function listMediaController(_req, res) {
    res.json(await (0, mediaService_1.getMediaLibrary)());
}
