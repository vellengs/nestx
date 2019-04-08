
import { Schema, SchemaTypes as t, SchemaOptions, model } from 'mongoose';

export const schema = new Schema({
    company: { type: t.String },
    siteUrl: { type: t.String },
    address: { type: t.String },
},
    { timestamps: true }); 