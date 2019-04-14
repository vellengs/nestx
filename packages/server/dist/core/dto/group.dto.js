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
class CreateGroupReq {
}
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateGroupReq.prototype, "outid", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateGroupReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateGroupReq.prototype, "icon", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateGroupReq.prototype, "parent", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], CreateGroupReq.prototype, "paths", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateGroupReq.prototype, "director", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateGroupReq.prototype, "order", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], CreateGroupReq.prototype, "isRegion", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateGroupReq.prototype, "description", void 0);
exports.CreateGroupReq = CreateGroupReq;
class EditGroupReq {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditGroupReq.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], EditGroupReq.prototype, "outid", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditGroupReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditGroupReq.prototype, "icon", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditGroupReq.prototype, "parent", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], EditGroupReq.prototype, "paths", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditGroupReq.prototype, "director", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], EditGroupReq.prototype, "order", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], EditGroupReq.prototype, "isRegion", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditGroupReq.prototype, "description", void 0);
exports.EditGroupReq = EditGroupReq;
class GroupRes {
}
exports.GroupRes = GroupRes;
//# sourceMappingURL=group.dto.js.map