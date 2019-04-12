"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ProfileSchema = new mongoose_1.Schema({
    company: { type: mongoose_1.SchemaTypes.String },
    siteUrl: { type: mongoose_1.SchemaTypes.String },
    address: { type: mongoose_1.SchemaTypes.String },
}, { timestamps: true });
exports.ProfileSchema.set('toJSON', {
    transform: function (_doc, ret, _options) {
        ret.id = ret._id;
    }
});
//# sourceMappingURL=profile.schema.js.map