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
class CreateDictReq {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDictReq.prototype, "category", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDictReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDictReq.prototype, "translate", void 0);
__decorate([
    class_validator_1.IsJSON(),
    __metadata("design:type", Object)
], CreateDictReq.prototype, "expand", void 0);
exports.CreateDictReq = CreateDictReq;
class EditDictReq {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditDictReq.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditDictReq.prototype, "category", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditDictReq.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditDictReq.prototype, "translate", void 0);
__decorate([
    class_validator_1.IsJSON(),
    __metadata("design:type", Object)
], EditDictReq.prototype, "expand", void 0);
exports.EditDictReq = EditDictReq;
class DictRes {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], DictRes.prototype, "category", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], DictRes.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], DictRes.prototype, "translate", void 0);
__decorate([
    class_validator_1.IsJSON(),
    __metadata("design:type", Object)
], DictRes.prototype, "expand", void 0);
exports.DictRes = DictRes;
//# sourceMappingURL=dict.dto.js.map