"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signAdminToken = signAdminToken;
exports.requireAuthenticated = requireAuthenticated;
exports.requireRole = requireRole;
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
function readUser(req) {
    const token = readToken(req);
    if (!token) {
        throw new AppError_1.AppError(401, 'Необходимо е да влезете в админ панела.');
    }
    try {
        return jsonwebtoken_1.default.verify(token, env_1.env.jwtSecret);
    }
    catch {
        throw new AppError_1.AppError(401, 'Сесията е изтекла. Моля, влезте отново.');
    }
}
function requireAuthenticated(req, _res, next) {
    try {
        req.user = readUser(req);
        next();
    }
    catch (err) {
        next(err);
    }
}
function requireRole(roles) {
    return (req, _res, next) => {
        try {
            const user = readUser(req);
            if (!roles.includes(user.role)) {
                next(new AppError_1.AppError(403, 'Нямате права за тази операция.'));
                return;
            }
            req.user = user;
            next();
        }
        catch (err) {
            next(err);
        }
    };
}
function requireAdmin(req, res, next) {
    return requireRole(['ADMIN'])(req, res, next);
}
