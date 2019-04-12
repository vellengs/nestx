"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const schemas_1 = require("./schemas");
const controllers_1 = require("./controllers");
const models = [
    { name: 'Dict', schema: schemas_1.DictSchema },
    { name: 'Log', schema: schemas_1.LogSchema },
    { name: 'Menu', schema: schemas_1.MenuSchema },
    { name: 'Role', schema: schemas_1.RoleSchema },
    { name: 'Setting', schema: schemas_1.SettingSchema },
    { name: 'User', schema: schemas_1.UserSchema },
    { name: 'Notice', schema: schemas_1.NoticeSchema },
    { name: 'VeryCode', schema: schemas_1.VeryCodeSchema },
    { name: 'Group', schema: schemas_1.GroupSchema },
    { name: 'Profile', schema: schemas_1.ProfileSchema },
    { name: 'Appearance', schema: schemas_1.AppearanceSchema },
];
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature(models),
        ],
        controllers: [...controllers_1.CoreControllers],
        providers: [...controllers_1.CoreServices],
        exports: [...controllers_1.CoreServices]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map