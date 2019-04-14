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
class CreateUserReq {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "password", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "avatar", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "mobile", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateUserReq.prototype, "isAdmin", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateUserReq.prototype, "isApproved", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateUserReq.prototype, "expired", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "company", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "siteUrl", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateUserReq.prototype, "address", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString({ each: true }),
    __metadata("design:type", Array)
], CreateUserReq.prototype, "groups", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString({ each: true }),
    __metadata("design:type", Array)
], CreateUserReq.prototype, "roles", void 0);
exports.CreateUserReq = CreateUserReq;
class EditProfileReq {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditProfileReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditProfileReq.prototype, "mobile", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditProfileReq.prototype, "password", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], EditProfileReq.prototype, "roles", void 0);
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditProfileReq.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditProfileReq.prototype, "company", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditProfileReq.prototype, "siteUrl", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditProfileReq.prototype, "address", void 0);
exports.EditProfileReq = EditProfileReq;
class EditUserReq {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditUserReq.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditUserReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditUserReq.prototype, "mobile", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditUserReq.prototype, "password", void 0);
__decorate([
    class_validator_1.IsArray(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], EditUserReq.prototype, "roles", void 0);
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], EditUserReq.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditUserReq.prototype, "company", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditUserReq.prototype, "siteUrl", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditUserReq.prototype, "address", void 0);
exports.EditUserReq = EditUserReq;
class UserRes {
}
exports.UserRes = UserRes;
class UsersOfRole {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UsersOfRole.prototype, "role", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    __metadata("design:type", Array)
], UsersOfRole.prototype, "userIds", void 0);
exports.UsersOfRole = UsersOfRole;
//# sourceMappingURL=user.dto.js.map