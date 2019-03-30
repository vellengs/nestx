import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
const option: SchemaOptions = {};
option.timestamps = true;

export const NoticeSchema = new Schema({
    avatar: { type: t.String },
    title: { type: t.Boolean },
    datetime: { type: t.String },
    type: { type: t.String },
    read: { type: t.Boolean },
}, option);
