"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.logout = logout;
exports.me = me;
const env_1 = require("../config/env");
const authService_1 = require("../services/authService");
async function login(req, res) {
    const { email, password } = req.body;
    const result = await (0, authService_1.loginAdmin)(email, password);
    res.cookie('admin_token', result.token, {
        httpOnly: true,
        secure: env_1.env.isProduction,
        sameSite: 'lax',
        maxAge: 8 * 60 * 60 * 1000
    });
    res.json(result);
}
async function logout(_req, res) {
    res.clearCookie('admin_token');
    res.json({ ok: true });
}
async function me(req, res) {
    res.json({ user: req.user });
}
