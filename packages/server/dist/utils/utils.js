"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Utils {
    static getKeyAndCert(key = 'ssl_private_key.pem', cert = 'ssl_certificate.crt') {
        if (fs.existsSync(key) && fs.existsSync(cert))
            return {
                key: fs.readFileSync(key),
                cert: fs.readFileSync(cert),
            };
        return {};
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map