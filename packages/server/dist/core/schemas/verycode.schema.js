"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.VeryCodeSchema = new mongoose_1.Schema({
    mobile: {
        type: mongoose_1.SchemaTypes.String
    },
    lastSent: {
        type: mongoose_1.SchemaTypes.Decimal128,
        default: Date.now
    },
    code: {
        type: mongoose_1.SchemaTypes.String
    },
}, {
    timestamps: true,
    usePushEach: true,
});
exports.VeryCodeSchema.set('toJSON', {
    transform: function (_doc, ret, _options) {
        ret.id = ret._id;
    }
});
//# sourceMappingURL=verycode.schema.js.map