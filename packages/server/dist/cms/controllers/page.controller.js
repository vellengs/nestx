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
const nest_swagger_1 = require("nest-swagger");
const page_service_1 = require("./page.service");
const dto_1 = require("./../dto");
const common_2 = require("./../../common");
let PageController = class PageController {
    constructor(service) {
        this.service = service;
    }
    search(keyword, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.search(keyword, value);
        });
    }
    create(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.create(entry);
        });
    }
    update(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.update(entry);
        });
    }
    query(keyword, page = 1, size = 10, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.querySearch(keyword, page, size, sort);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.remove(id);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.service.findById(id);
        });
    }
};
__decorate([
    common_1.Get('search'),
    __param(0, common_1.Query('keyword')),
    __param(1, common_1.Query('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "search", null);
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePageDto]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.EditPageDto]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "update", null);
__decorate([
    common_1.Get('query'),
    __param(0, common_1.Query('keyword')),
    __param(1, common_1.Query('page', new common_2.NullableParseIntPipe())),
    __param(2, common_1.Query('size', new common_2.NullableParseIntPipe())),
    __param(3, common_1.Query('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "query", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "remove", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PageController.prototype, "findOne", null);
PageController = __decorate([
    nest_swagger_1.Tags('cms'),
    common_1.Controller('page'),
    __metadata("design:paramtypes", [page_service_1.PageService])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map