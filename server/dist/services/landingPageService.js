"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLandingPages = getLandingPages;
exports.getLandingPage = getLandingPage;
exports.createLandingPageRecord = createLandingPageRecord;
exports.updateLandingPageRecord = updateLandingPageRecord;
exports.archiveLandingPage = archiveLandingPage;
const landingPageRepository_1 = require("../repositories/landingPageRepository");
const AppError_1 = require("../errors/AppError");
const slug_1 = require("../utils/slug");
function mapInput(input) {
    return {
        title: input.title,
        slug: input.slug ? (0, slug_1.makeSlug)(input.slug) : (0, slug_1.makeSlug)(input.title),
        heroTitle: input.heroTitle,
        heroSubtitle: input.heroSubtitle || null,
        heroImage: input.heroImage || null,
        ctaText: input.ctaText || null,
        ctaLink: input.ctaLink || null,
        sections: input.sections,
        status: input.status,
        seoTitle: input.seoTitle || input.title,
        seoDescription: input.seoDescription || input.heroSubtitle || null
    };
}
function getLandingPages(includeDrafts = false) {
    return (0, landingPageRepository_1.listLandingPages)(includeDrafts);
}
async function getLandingPage(slug, includeDrafts = false) {
    const page = await (0, landingPageRepository_1.findLandingPageBySlug)(slug, includeDrafts);
    if (!page) {
        throw new AppError_1.AppError(404, 'Страницата не е намерена.');
    }
    return page;
}
function createLandingPageRecord(input) {
    return (0, landingPageRepository_1.createLandingPage)(mapInput(input));
}
function updateLandingPageRecord(id, input) {
    return (0, landingPageRepository_1.updateLandingPage)(id, mapInput(input));
}
function archiveLandingPage(id) {
    return (0, landingPageRepository_1.deleteLandingPage)(id);
}
