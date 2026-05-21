"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const requiredInProduction = ['DATABASE_URL', 'JWT_SECRET'];
for (const key of requiredInProduction) {
    if (process.env.NODE_ENV === 'production' && !process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}
exports.env = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '3001',
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET || 'dev-only-change-before-production',
    clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    blobToken: process.env.BLOB_READ_WRITE_TOKEN,
    isProduction: process.env.NODE_ENV === 'production',
    isVercel: process.env.VERCEL === '1'
};
