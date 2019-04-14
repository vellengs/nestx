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
const common_2 = require("./../../common");
const dto_1 = require("./../dto");
let SettingsService = class SettingsService extends common_2.MongooseService {
    constructor(model) {
        super(model);
        this.model = model;
        this.defaultQueryFields = ['name', 'key', 'value', 'description'];
    }
    querySearch(keyword, page, size, sort) {
        const _super = Object.create(null, {
            query: { get: () => super.query }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.query.call(this, page, size, {}, { keyword, field: 'name' }, this.defaultQueryFields, sort);
        });
    }
    getSettingsByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = new dto_1.SettingsGroup();
            if (name) {
                const docs = yield this.model
                    .find({
                    name: name,
                })
                    .exec();
                if (docs) {
                    docs.forEach(doc => {
                        result[doc.key] = doc.value;
                    });
                }
            }
            return result;
        });
    }
    getSettingsByKey(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.model
                .findOne({
                key: name,
            })
                .exec();
            return setting;
        });
    }
    updateSettingsByName(name, entry) {
        return __awaiter(this, void 0, void 0, function* () {
            const keys = Object.keys(entry);
            for (let key of keys) {
                const instance = {
                    key: key,
                    value: entry[key],
                };
                yield this.model
                    .findOneAndUpdate({ key: key, name: name }, { $set: instance }, { upsert: true, new: true })
                    .exec();
            }
            return this.getSettingsByName(name);
        });
    }
};
SettingsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Setting')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map