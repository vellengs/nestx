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
const controllers_1 = require("./controllers");
const schemas_1 = require("./schemas");
const models = [
    { name: 'Article', schema: schemas_1.ArticleSchema },
    { name: 'Category', schema: schemas_1.CategorySchema },
    { name: 'Comment', schema: schemas_1.CommentSchema },
    { name: 'Media', schema: schemas_1.MediaSchema },
    { name: 'Page', schema: schemas_1.PageSchema },
    { name: 'Photo', schema: schemas_1.PhotoSchema },
];
let CmsModule = class CmsModule {
};
CmsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature(models),
        ],
        controllers: [...controllers_1.CmsControllers],
        providers: [...controllers_1.CmsServices],
    })
], CmsModule);
exports.CmsModule = CmsModule;
//# sourceMappingURL=cms.module.js.map