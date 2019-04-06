"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
let CryptoService = class CryptoService {
    constructor() {
        this.algorithm = 'aes-256-ctr';
        this.key = 'nest-workshop';
    }
    hash(text) {
        const cipher = crypto_1.createCipher(this.algorithm, this.key);
        return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    }
    compare(text, hash) {
        const decipher = crypto_1.createDecipher(this.algorithm, this.key);
        const decoded = decipher.update(hash, 'hex', 'utf8') + decipher.final('utf8');
        return decoded === text;
    }
};
CryptoService = __decorate([
    common_1.Injectable()
], CryptoService);
exports.CryptoService = CryptoService;
//# sourceMappingURL=crypto.service.js.map