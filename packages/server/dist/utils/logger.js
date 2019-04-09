"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require("log4js");
const path_1 = require("path");
const fs_1 = require("fs");
const cwd = process.cwd();
const config = path_1.join(cwd, 'log4js.json');
if (fs_1.existsSync(config)) {
    log4js.configure(config);
}
exports.logger = log4js.getLogger('app');
//# sourceMappingURL=logger.js.map