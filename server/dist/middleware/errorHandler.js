"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const AppError_1 = require("../errors/AppError");
const notFoundHandler = (_err, _req, res, _next) => {
    res.status(404).json({ error: 'Маршрутът не е намерен' });
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (err, _req, res, _next) => {
    if (err instanceof AppError_1.AppError) {
        res.status(err.statusCode).json({ error: err.message, code: err.code });
        return;
    }
    if (err instanceof zod_1.ZodError) {
        res.status(400).json({
            error: 'Моля, проверете въведените данни.',
            details: err.flatten()
        });
        return;
    }
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            res.status(409).json({ error: 'Вече съществува запис с тези данни.' });
            return;
        }
    }
    console.error(err);
    res.status(500).json({ error: 'Възникна неочаквана грешка.' });
};
exports.errorHandler = errorHandler;
