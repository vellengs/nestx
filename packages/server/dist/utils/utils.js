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
    static strip(obj) {
        Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : '');
        return Object.assign({}, obj);
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map