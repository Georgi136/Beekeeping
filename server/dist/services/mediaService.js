"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveMedia = saveMedia;
exports.getMediaLibrary = getMediaLibrary;
const blob_1 = require("@vercel/blob");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const env_1 = require("../config/env");
const paths_1 = require("../paths");
const mediaRepository_1 = require("../repositories/mediaRepository");
function safeFilename(filename) {
    return filename.replace(/[^a-zA-Z0-9._-]/g, '-');
}
async function saveMedia(file, alt) {
    const filename = `${Date.now()}-${safeFilename(file.originalname)}`;
    let url;
    let pathname;
    if (env_1.env.blobToken) {
        const blob = await (0, blob_1.put)(`products/${filename}`, file.buffer, {
            access: 'public',
            token: env_1.env.blobToken,
            contentType: file.mimetype
        });
        url = blob.url;
        pathname = blob.pathname;
    }
    else {
        await promises_1.default.mkdir(paths_1.uploadsDir, { recursive: true });
        const target = path_1.default.join(paths_1.uploadsDir, filename);
        await promises_1.default.writeFile(target, file.buffer);
        url = `/uploads/${filename}`;
        pathname = filename;
    }
    return (0, mediaRepository_1.createMediaAsset)({
        url,
        pathname,
        contentType: file.mimetype,
        size: file.size,
        alt
    });
}
function getMediaLibrary() {
    return (0, mediaRepository_1.listMediaAssets)();
}
