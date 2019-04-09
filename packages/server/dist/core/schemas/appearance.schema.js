"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.AppearanceSchema = new mongoose_1.Schema({
    name: { type: mongoose_1.SchemaTypes.String },
    options: { type: mongoose_1.SchemaTypes.Mixed },
    data: { type: mongoose_1.SchemaTypes.Mixed },
}, {
    timestamps: true,
    usePushEach: true
});
exports.AppearanceSchema.set('toJSON', {
    transform: function (_doc, ret, _options) {
        ret.id = ret._id;
    }
});
//# sourceMappingURL=appearance.schema.js.map