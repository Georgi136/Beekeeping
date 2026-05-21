"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = loginAdmin;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const AppError_1 = require("../errors/AppError");
const userRepository_1 = require("../repositories/userRepository");
const auth_1 = require("../middleware/auth");
async function loginAdmin(email, password) {
    const user = await (0, userRepository_1.findUserByEmail)(email);
    if (!user) {
        throw new AppError_1.AppError(401, 'Грешен имейл или парола.');
    }
    const validPassword = await bcryptjs_1.default.compare(password, user.passwordHash);
    if (!validPassword) {
        throw new AppError_1.AppError(401, 'Грешен имейл или парола.');
    }
    const token = (0, auth_1.signAdminToken)({
        id: user.id,
        email: user.email,
        role: user.role
    });
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        }
    };
}
