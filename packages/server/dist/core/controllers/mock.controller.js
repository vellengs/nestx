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
const common_1 = require("@nestjs/common");
const nest_swagger_1 = require("nest-swagger");
const mock_service_1 = require("./mock.service");
let MockController = class MockController {
    constructor(mockService) {
        this.mockService = mockService;
    }
    initData() {
        return this.mockService.initDatabase();
    }
    reset() {
        return this.mockService.resetDatabase();
    }
};
__decorate([
    common_1.Get('init'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MockController.prototype, "initData", null);
__decorate([
    common_1.Get('reset'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MockController.prototype, "reset", null);
MockController = __decorate([
    nest_swagger_1.Tags('mock'),
    common_1.Controller('mock'),
    __metadata("design:paramtypes", [mock_service_1.MockService])
], MockController);
exports.MockController = MockController;
//# sourceMappingURL=mock.controller.js.map