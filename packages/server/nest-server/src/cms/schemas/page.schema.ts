import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const PageSchema = new Schema(
  {
    name: { type: t.String },
    title: t.String,
    keyword: t.String,
    description: t.String,
    sort: t.Number,
    disable: t.Boolean,
    publish: { type: t.Date, default: Date.now },
    meta: {
      ref: 'Meta',
      type: t.ObjectId,
    },
    content: {
      ref: 'Content',
      type: t.ObjectId,
    },
    template: {
      ref: 'Content',
      type: t.ObjectId,
    },
  },
  option,
);
PageSchema.set('toJSON', {
  transform,
});
