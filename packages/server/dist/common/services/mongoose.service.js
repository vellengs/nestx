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
const utils_1 = require("./../../utils");
let MongooseService = class MongooseService {
    constructor(model) {
        this.model = model;
        this.defaultQueryFields = [];
    }
    create(entry) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = new this.model(entry);
            return yield instance.save();
        });
    }
    update(entry, fields = this.defaultQueryFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.model
                .findOneAndUpdate({ _id: entry.id }, { $set: entry }, { upsert: true, fields: this.getFields(fields), new: true })
                .exec();
            return instance;
        });
    }
    query(page = 1, size = 10, query = {}, search = { field: 'name' }, fields = this.defaultQueryFields, sort = { _id: 1 }, populate) {
        return __awaiter(this, void 0, void 0, function* () {
            page = page < 1 ? 1 : page;
            let condition = utils_1.Utils.strip(query);
            if (search && search.keyword) {
                condition[search.field] = new RegExp(search.keyword, 'i');
            }
            const selectFields = this.getFields(fields);
            let listQuery = this.model
                .find(condition)
                .select(selectFields)
                .sort(sort);
            if (populate) {
                listQuery = listQuery.populate(populate);
            }
            const collection = this.model.find(condition);
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const items = ((yield listQuery
                    .limit(size)
                    .skip(size * (page - 1))
                    .lean()) || []).map((item) => {
                    const id = item._id;
                    return Object.assign({ id }, item);
                });
                let result = {
                    list: items,
                    count: yield collection.countDocuments(),
                    query: {
                        page: page,
                        size: size,
                    },
                };
                resolve(result);
            }));
        });
    }
    searchTree(model, keyword, id, category = '', limit = 10, labelField = 'name', valueField = '_id', searchField = 'name') {
        return __awaiter(this, void 0, void 0, function* () {
            const critical = {};
            critical[searchField] = new RegExp(keyword, 'i');
            const query = keyword ? critical : {};
            if (category) {
                query.category = category;
            }
            const fields = {};
            fields[labelField] = 1;
            fields[valueField] = 1;
            fields['parent'] = 1;
            const docs = (yield model
                .find(query)
                .select(fields)
                .limit(limit)
                .exec()) || [];
            if (id && (mongoose_1.Types.ObjectId.isValid(id) || valueField !== '_id')) {
                const conditions = {};
                conditions[valueField] = id;
                const selected = yield model.findOne(conditions).select(fields);
                if (selected) {
                    const found = docs.findIndex((doc) => doc[valueField] == id);
                    if (found === -1) {
                        docs.push(selected);
                    }
                }
            }
            return docs.map((item) => {
                const result = {
                    title: item[labelField],
                    id: item[valueField],
                    parent: item['parent'],
                };
                return result;
            });
        });
    }
    search(keyword, id, category = '', limit = 10, labelField = 'name', valueField = '_id', searchField = 'name') {
        return __awaiter(this, void 0, void 0, function* () {
            let query = {};
            if (keyword) {
                query[searchField] = new RegExp(keyword, 'i');
            }
            if (category) {
                query.category = category;
            }
            const fields = {};
            fields[labelField] = 1;
            fields[valueField] = 1;
            const docs = (yield this.model
                .find(query)
                .select(fields)
                .limit(limit)
                .exec()) || [];
            if (id && (mongoose_1.Types.ObjectId.isValid(id) || valueField !== '_id')) {
                const conditions = {};
                conditions[valueField] = id;
                const selected = yield this.model.findOne(conditions).select(fields);
                if (selected) {
                    const found = docs.findIndex((doc) => doc[valueField] == id);
                    if (found === -1) {
                        docs.push(selected);
                    }
                }
            }
            return docs.map((item) => {
                const result = {
                    label: item[labelField],
                    value: item[valueField],
                };
                return result;
            });
        });
    }
    findOne(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne(conditions).exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findById(id).exec();
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let entity = yield this.model.findById(id);
            return yield this.model.deleteOne(entity);
        });
    }
    getFields(fields) {
        const selectFields = {};
        fields.forEach(field => {
            selectFields[field] = 1;
        });
        return selectFields;
    }
};
MongooseService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MongooseService);
exports.MongooseService = MongooseService;
//# sourceMappingURL=mongoose.service.js.map