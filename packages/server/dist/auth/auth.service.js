"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("./../core/controllers/users.service");
let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    login(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.login(payload.username, payload.password);
            if (user) {
                return yield this.createToken(user);
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    createToken(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = this.jwtService.sign({ account: payload.username });
            return {
                expiresIn: 3600,
                accessToken,
            };
        });
    }
    register(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const validate = yield this.userService.verifyCode(payload.veryCode, payload.mobile);
            if (!validate) {
                throw new common_1.NotAcceptableException('verycode failure');
            }
            const user = yield this.userService.register(payload).catch((error) => {
                throw new common_1.NotAcceptableException('register failure might duplicate with username, email or mobile.');
            });
            return yield this.createToken(user);
        });
    }
    captcha(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            const code = yield this.userService.sendVeryCode(mobile);
            return {
                ok: true
            };
        });
    }
    validateUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userService.findOne({
                username: payload.account
            });
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map