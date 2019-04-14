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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
class CreateMenuReq {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "slug", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateMenuReq.prototype, "group", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "link", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateMenuReq.prototype, "order", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "externalLink", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateMenuReq.prototype, "blank", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "icon", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "badge", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "badgeDot", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "badgeStatus", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateMenuReq.prototype, "enable", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateMenuReq.prototype, "expanded", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "acl", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateMenuReq.prototype, "parent", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], CreateMenuReq.prototype, "permissions", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateMenuReq.prototype, "isMenu", void 0);
exports.CreateMenuReq = CreateMenuReq;
class EditMenuReq {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "slug", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], EditMenuReq.prototype, "group", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "link", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], EditMenuReq.prototype, "order", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "externalLink", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], EditMenuReq.prototype, "blank", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "icon", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "badge", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "badgeDot", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "badgeStatus", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], EditMenuReq.prototype, "enable", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], EditMenuReq.prototype, "expanded", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "acl", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditMenuReq.prototype, "parent", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], EditMenuReq.prototype, "permissions", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], EditMenuReq.prototype, "isMenu", void 0);
exports.EditMenuReq = EditMenuReq;
class MenuRes {
}
exports.MenuRes = MenuRes;
//# sourceMappingURL=menu.dto.js.map