"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const fs_1 = require("fs");
const dotenv_1 = require("dotenv");
if (fs_1.existsSync('.env')) {
    dotenv_1.config({ path: '.env' });
}
else if (fs_1.existsSync('.env.example')) {
    dotenv_1.config({ path: '.env.example' });
}
else {
    console.log('Using .env file to supply config environment variables');
    logger_1.logger.debug('Using .env file to supply config environment variables');
}
exports.ENVIRONMENT = process.env.NODE_ENV;
const envMapping = {
    production: 'MONGODB_URI_PRODUCTION',
    development: 'MONGODB_URI_DEV',
    test: 'MONGODB_URI_TEST'
};
let mongoUriKey = envMapping[exports.ENVIRONMENT] || 'MONGODB_URI_TEST';
exports.MONGODB_URI = process.env[mongoUriKey];
exports.SESSION_SECRET = process.env['SESSION_SECRET'];
exports.PORT = process.env['PORT'] || 5600;
if (!exports.SESSION_SECRET) {
    console.log('No client secret. Set SESSION_SECRET environment variable.');
    logger_1.logger.error('No client secret. Set SESSION_SECRET environment variable.');
    process.exit(1);
}
if (!exports.MONGODB_URI) {
    console.log('No mongo connection string. Set MONGODB_URI environment variable.');
    logger_1.logger.error('No mongo connection string. Set MONGODB_URI environment variable.');
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map