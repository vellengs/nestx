"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.GroupSchema = new mongoose_1.Schema({
    outid: { type: mongoose_1.SchemaTypes.Number },
    name: { type: mongoose_1.SchemaTypes.String },
    icon: { type: mongoose_1.SchemaTypes.String },
    isRegion: { type: mongoose_1.SchemaTypes.Boolean },
    order: { type: mongoose_1.SchemaTypes.Number },
    parent: { type: mongoose_1.SchemaTypes.ObjectId, ref: 'Group' },
    paths: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: 'Group' }],
    director: { type: mongoose_1.SchemaTypes.ObjectId, ref: 'User' },
    description: { type: mongoose_1.SchemaTypes.String }
}, { timestamps: true });
exports.GroupSchema.set('toJSON', {
    transform: function (_doc, ret, _options) {
        ret.id = ret._id;
    }
});
//# sourceMappingURL=group.schema.js.map