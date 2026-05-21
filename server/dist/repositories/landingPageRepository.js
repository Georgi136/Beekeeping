"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listLandingPages = listLandingPages;
exports.findLandingPageBySlug = findLandingPageBySlug;
exports.createLandingPage = createLandingPage;
exports.updateLandingPage = updateLandingPage;
exports.deleteLandingPage = deleteLandingPage;
const client_1 = require("@prisma/client");
const prisma_1 = require("../lib/prisma");
function listLandingPages(includeDrafts = false) {
    return prisma_1.prisma.landingPage.findMany({
        where: includeDrafts ? undefined : { status: client_1.PageStatus.PUBLISHED },
        orderBy: { updatedAt: 'desc' }
    });
}
function findLandingPageBySlug(slug, includeDrafts = false) {
    return prisma_1.prisma.landingPage.findFirst({
        where: {
            slug,
            status: includeDrafts ? undefined : client_1.PageStatus.PUBLISHED
        }
    });
}
function createLandingPage(data) {
    return prisma_1.prisma.landingPage.create({ data });
}
function updateLandingPage(id, data) {
    return prisma_1.prisma.landingPage.update({
        where: { id },
        data
    });
}
function deleteLandingPage(id) {
    return prisma_1.prisma.landingPage.update({
        where: { id },
        data: { status: client_1.PageStatus.ARCHIVED }
    });
}
