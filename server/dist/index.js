"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const contact_1 = __importDefault(require("./routes/contact"));
const products_1 = __importDefault(require("./routes/products"));
const orders_1 = __importDefault(require("./routes/orders"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Serve static files from the 'uploads' directory
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/contact', contact_1.default);
app.use('/api/products', products_1.default);
app.use('/api/orders', orders_1.default);
// Health check
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
