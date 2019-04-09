"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const option = {};
option.timestamps = true;
exports.ArticleSchema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.SchemaTypes.String
    },
    paths: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: 'Category' }],
    parent: {
        type: mongoose_1.SchemaTypes.ObjectId,
        ref: 'Category'
    }
}, option);
//# sourceMappingURL=article.schema.js.map