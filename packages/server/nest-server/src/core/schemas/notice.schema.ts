import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const NoticeSchema = new Schema(
  {
    title: { type: t.String },
    type: { type: t.String },
    extra: { type: t.String },
    status: { type: t.String },
    read: { type: t.Boolean },
  },
  option,
);

NoticeSchema.set('toJSON', {
  transform,
});
