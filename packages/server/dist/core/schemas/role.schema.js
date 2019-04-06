"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const option = {};
option.timestamps = true;
exports.RoleSchema = new mongoose_1.Schema({
    name: { type: mongoose_1.SchemaTypes.String },
    description: { type: mongoose_1.SchemaTypes.String },
    permissions: [{ type: mongoose_1.SchemaTypes.ObjectId, ref: 'Menu' }],
}, option);
exports.RoleSchema.set('toJSON', {
    transform: function (_doc, ret, _options) {
        ret.id = ret._id;
    }
});
//# sourceMappingURL=role.schema.js.map