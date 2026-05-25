"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const morgan_1 = __importDefault(require("morgan"));
const contact_1 = __importDefault(require("./routes/contact"));
const products_1 = __importDefault(require("./routes/products"));
const orders_1 = __importDefault(require("./routes/orders"));
const auth_1 = __importDefault(require("./routes/auth"));
const admin_1 = __importDefault(require("./routes/admin"));
const categories_1 = __importDefault(require("./routes/categories"));
const promotions_1 = __importDefault(require("./routes/promotions"));
const landingPages_1 = __importDefault(require("./routes/landingPages"));
const erp_1 = __importDefault(require("./routes/erp"));
const paths_1 = require("./paths");
const env_1 = require("./config/env");
const errorHandler_1 = require("./middleware/errorHandler");
const seoController_1 = require("./controllers/seoController");
const app = (0, express_1.default)();
app.set('trust proxy', 1);
app.use((0, helmet_1.default)({
    crossOriginResourcePolicy: {
        policy: 'cross-origin'
    }
}));
app.use((0, morgan_1.default)(env_1.env.isProduction ? 'combined' : 'dev'));
app.use((0, cors_1.default)({
    origin: env_1.env.isProduction ? env_1.env.clientOrigin : true,
    credentials: true
}));
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json({ limit: '1mb' }));
app.use('/uploads', express_1.default.static(paths_1.uploadsDir));
app.get('/robots.txt', seoController_1.robotsController);
app.get('/sitemap.xml', seoController_1.sitemapController);
app.get('/api/robots.txt', seoController_1.robotsController);
app.get('/api/sitemap.xml', seoController_1.sitemapController);
app.use('/api/contact', contact_1.default);
app.use('/api/products', products_1.default);
app.use('/api/orders', orders_1.default);
app.use('/api/categories', categories_1.default);
app.use('/api/promotions', promotions_1.default);
app.use('/api/landing-pages', landingPages_1.default);
app.use('/api/auth', auth_1.default);
app.use('/api/admin/erp', erp_1.default);
app.use('/api/admin', admin_1.default);
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});
app.use(errorHandler_1.errorHandler);
exports.default = app;
