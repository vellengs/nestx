"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.DictSchema = new mongoose_1.Schema({
    category: { type: mongoose_1.SchemaTypes.String },
    name: { type: mongoose_1.SchemaTypes.String },
    translate: { type: mongoose_1.SchemaTypes.String },
    expand: { type: mongoose_1.SchemaTypes.Mixed },
}, {
    timestamps: true,
    usePushEach: true
});
exports.DictSchema.set('toJSON', {
    transform: function (_doc, ret, _options) {
        ret.id = ret._id;
    }
});
//# sourceMappingURL=dict.schema.js.map