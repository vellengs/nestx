import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
const option: SchemaOptions = {};
option.timestamps = true;

export const schema = new Schema({
    name: { type: t.String },
    description: { type: t.String },
    permissions: [{ type: t.ObjectId, ref: 'Menu' }],
}, option);
