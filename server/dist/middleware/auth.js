"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signAdminToken = signAdminToken;
exports.requireAdmin = requireAdmin;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const AppError_1 = require("../errors/AppError");
function signAdminToken(payload) {
    return jsonwebtoken_1.default.sign(payload, env_1.env.jwtSecret, { expiresIn: '8h' });
}
function readToken(req) {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith('Bearer ')) {
        return authHeader.substring('Bearer '.length);
    }
    return req.cookies?.admin_token;
}
function requireAdmin(req, _res, next) {
    const token = readToken(req);
    if (!token) {
        next(new AppError_1.AppError(401, 'Необходимо е да влезете в админ панела.'));
        return;
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, env_1.env.jwtSecret);
        if (payload.role !== 'ADMIN') {
            next(new AppError_1.AppError(403, 'Нямате права за тази операция.'));
            return;
        }
        req.user = payload;
        next();
    }
    catch {
        next(new AppError_1.AppError(401, 'Сесията е изтекла. Моля, влезте отново.'));
    }
}
