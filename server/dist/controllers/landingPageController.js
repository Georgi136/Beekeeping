"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPublicLandingPages = listPublicLandingPages;
exports.getPublicLandingPage = getPublicLandingPage;
exports.listAdminLandingPages = listAdminLandingPages;
exports.createLandingPageController = createLandingPageController;
exports.updateLandingPageController = updateLandingPageController;
exports.archiveLandingPageController = archiveLandingPageController;
const landingPageService_1 = require("../services/landingPageService");
const params_1 = require("../utils/params");
async function listPublicLandingPages(_req, res) {
    res.json(await (0, landingPageService_1.getLandingPages)(false));
}
async function getPublicLandingPage(req, res) {
    res.json(await (0, landingPageService_1.getLandingPage)((0, params_1.firstParam)(req.params.slug), false));
}
async function listAdminLandingPages(_req, res) {
    res.json(await (0, landingPageService_1.getLandingPages)(true));
}
async function createLandingPageController(req, res) {
    res.status(201).json(await (0, landingPageService_1.createLandingPageRecord)(req.body));
}
async function updateLandingPageController(req, res) {
    res.json(await (0, landingPageService_1.updateLandingPageRecord)(Number(req.params.id), req.body));
}
async function archiveLandingPageController(req, res) {
    await (0, landingPageService_1.archiveLandingPage)(Number(req.params.id));
    res.status(204).send();
}
