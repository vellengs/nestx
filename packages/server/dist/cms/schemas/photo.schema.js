"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const option = {};
option.timestamps = true;
exports.PhotoSchema = new mongoose_1.Schema({
    name: {
        type: mongoose_1.SchemaTypes.String
    }
}, option);
//# sourceMappingURL=photo.schema.js.map