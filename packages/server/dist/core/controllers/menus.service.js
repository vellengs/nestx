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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose_service_1 = require("./../../common/services/mongoose.service");
let MenusService = class MenusService extends mongoose_service_1.MongooseService {
    constructor(model, groupModel) {
        super(model);
        this.model = model;
        this.groupModel = groupModel;
        this.defaultQueryFields = [
            'name',
            'slug',
            'group',
            'link',
            'externalLink',
            'icon',
            'badge',
            'enable',
            'parent',
            'isMenu',
        ];
    }
    getAllPermissionTags() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (yield this.model
                .find({ isMenu: false })
                .select({
                name: 1,
                slug: 1,
                link: 1,
            })
                .exec()) || [];
            return result.map(r => {
                return { id: r._id, name: r.name, desc: r.link };
            });
        });
    }
    querySearch(isMenu, keyword, page = 1, size = 10, sort) {
        const _super = Object.create(null, {
            query: { get: () => super.query }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const populate = [
                {
                    path: 'permissions',
                    select: 'name',
                },
            ];
            return _super.query.call(this, page, size, { isMenu }, {
                keyword,
                field: 'name',
            }, this.defaultQueryFields, sort, populate);
        });
    }
    getAuthenticatedMenus(currentUser) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!currentUser) {
                Promise.reject('user is not authenticated');
            }
            const fields = this.getFields(this.defaultQueryFields);
            if (!currentUser.isAdmin) {
                const user = yield this.model.findById(currentUser.id, 'groups').exec();
                const roles = user.toObject().roles || [];
                const roleDocs = (yield this.groupModel
                    .find({
                    _id: { $in: roles },
                }, 'permissions')
                    .exec()) || [];
                const permissions = [];
                roleDocs.forEach((g) => {
                    permissions.push(...g.permissions);
                });
                const menus = yield this.model
                    .find({
                    _id: {
                        $in: permissions,
                    },
                    isMenu: true,
                })
                    .select(fields);
                return menus;
            }
            else {
                const menus = (yield this.model
                    .find({
                    isMenu: true,
                })
                    .select(fields)).map(item => {
                    return item;
                });
                return menus;
            }
        });
    }
    getMenuById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.model
                .findById(id)
                .populate({
                path: 'permissions',
                select: 'name',
            })
                .exec();
            return res;
        });
    }
};
MenusService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Menu')),
    __param(1, mongoose_2.InjectModel('Group')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], MenusService);
exports.MenusService = MenusService;
//# sourceMappingURL=menus.service.js.map