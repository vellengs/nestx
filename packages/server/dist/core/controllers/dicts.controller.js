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
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const class_transformer_1 = require("class-transformer");
const common_2 = require("./../../common");
const dicts_service_1 = require("./dicts.service");
const dto_1 = require("./../dto");
const nest_swagger_1 = require("nest-swagger");
let DictsController = class DictsController {
    constructor(dictService) {
        this.dictService = dictService;
    }
    create(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dictService.create(class_transformer_1.plainToClass(dto_1.CreateDictReq, entry));
        });
    }
    update(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dictService.update(class_transformer_1.plainToClass(dto_1.EditDictReq, entry));
        });
    }
    search(keyword, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dictService.search(keyword, value);
        });
    }
    query(keyword, index = 1, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dictService.query(index, size, { keyword });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dictService.findById(id);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDictReq]),
    __metadata("design:returntype", Promise)
], DictsController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.EditDictReq]),
    __metadata("design:returntype", Promise)
], DictsController.prototype, "update", null);
__decorate([
    common_1.Get('search'),
    __param(0, common_1.Query('keyword')),
    __param(1, common_1.Query('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DictsController.prototype, "search", null);
__decorate([
    common_1.Get('query'),
    __param(0, common_1.Query('keyword')),
    __param(1, common_1.Query('index', new common_2.NullableParseIntPipe())),
    __param(2, common_1.Query('size', new common_2.NullableParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], DictsController.prototype, "query", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DictsController.prototype, "findOne", null);
DictsController = __decorate([
    nest_swagger_1.Tags('core'),
    common_1.Controller('dict'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [dicts_service_1.DictsService])
], DictsController);
exports.DictsController = DictsController;
//# sourceMappingURL=dicts.controller.js.map