"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const option = {};
option.timestamps = true;
exports.NoticeSchema = new mongoose_1.Schema({
    title: { type: mongoose_1.SchemaTypes.String },
    type: { type: mongoose_1.SchemaTypes.String },
    extra: { type: mongoose_1.SchemaTypes.String },
    status: { type: mongoose_1.SchemaTypes.String },
    read: { type: mongoose_1.SchemaTypes.Boolean },
}, option);
exports.NoticeSchema.set('toJSON', {
    transform: function (_doc, ret, _options) {
        ret.id = ret._id;
    }
});
//# sourceMappingURL=notice.schema.js.map