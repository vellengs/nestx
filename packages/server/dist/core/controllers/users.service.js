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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose_service_1 = require("./../mongoose.service");
const FIVE_MINUTES = 5 * 60 * 1000;
const ONE_MINUTE = 1 * 60 * 1000;
const SMS_VERIFICATION_CONTENT = `sms template {0}`;
let UsersService = class UsersService extends mongoose_service_1.MongooseService {
    constructor(model, veryCodeModel) {
        super(model);
        this.model = model;
        this.veryCodeModel = veryCodeModel;
        this.defaultQueryFields = [
            'username',
            'avatar',
            'email',
            'name',
            'email',
            'mobile',
            'isAdmin',
            'isApproved',
            'expired',
        ];
    }
    sendVeryCode(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            const sms = yield this.veryCodeModel.findOne({
                mobile,
                lastSent: {
                    $gte: Date.now() - ONE_MINUTE
                }
            }).exec();
            if (sms && process.env.NODE_ENV !== 'test') {
                return Promise.reject("Request too often.");
            }
            if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
                const date = Date.now();
                const code = "123456";
                yield new this.veryCodeModel({ mobile, code, lastSent: date }).save();
                return Promise.resolve(code);
            }
            const code = "123456";
            yield new this.veryCodeModel({ mobile, code }).save();
            return Promise.resolve(code);
        });
    }
    verifyCode(code, mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
            const instance = yield this.veryCodeModel.findOne({
                code,
                mobile,
                lastSent: {
                    $gte: Date.now() - ONE_MINUTE
                }
            });
            return instance ? true : false;
        });
    }
    register(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            entry.name = entry.name || entry.username;
            const { name, email, password, username, mobile, mobilePrefix } = entry;
            const instance = new this.model({
                name, email, password, username, mobile, mobilePrefix
            });
            return yield instance.save();
        });
    }
    login(account, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.model.findOne({ username: account });
            if (instance) {
                return new Promise((resolve, reject) => {
                    instance.comparePassword(password, (err, isMatch) => {
                        if (err) {
                            return reject(err);
                        }
                        if (isMatch) {
                            resolve(instance);
                        }
                        resolve(false);
                    });
                });
            }
            return false;
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __param(1, mongoose_2.InjectModel('VeryCode')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map