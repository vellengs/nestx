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
const menus_service_1 = require("./menus.service");
const dto_1 = require("./../dto");
const nest_swagger_1 = require("nest-swagger");
let MenusController = class MenusController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    create(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.menuService.create(class_transformer_1.plainToClass(dto_1.CreateMenuReq, entry));
        });
    }
    update(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.menuService.update(class_transformer_1.plainToClass(dto_1.EditMenuReq, entry));
        });
    }
    search(keyword, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.menuService.search(keyword, value);
        });
    }
    query(isMenu, keyword, page = 1, size = 10, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.menuService.querySearch(isMenu, keyword, page, size, sort);
        });
    }
    getPermissionTags() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.menuService.getAllPermissionTags();
        });
    }
    getUserMenus(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.menuService.getAuthenticatedMenus(request.user);
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.menuService.getMenuById(id);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateMenuReq]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.EditMenuReq]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "update", null);
__decorate([
    common_1.Get('search'),
    __param(0, common_1.Query('keyword')),
    __param(1, common_1.Query('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "search", null);
__decorate([
    common_1.Get('query'),
    __param(0, common_1.Query('isMenu')),
    __param(1, common_1.Query('keyword')),
    __param(2, common_1.Query('page', new common_2.NullableParseIntPipe())),
    __param(3, common_1.Query('size', new common_2.NullableParseIntPipe())),
    __param(4, common_1.Query('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, String, Number, Number, String]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "query", null);
__decorate([
    common_1.Get('permissions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "getPermissionTags", null);
__decorate([
    common_1.Get('auth'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "getUserMenus", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenusController.prototype, "findOne", null);
MenusController = __decorate([
    nest_swagger_1.Tags('core'),
    common_1.Controller('menu'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [menus_service_1.MenusService])
], MenusController);
exports.MenusController = MenusController;
//# sourceMappingURL=menus.controller.js.map