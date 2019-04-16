import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const CategorySchema = new Schema(
  {
    name: {
      type: t.String,
    },
    paths: [{ type: t.ObjectId, ref: 'Category' }],
    parent: {
      type: t.ObjectId,
      ref: 'Category',
    },
  },
  option,
);

CategorySchema.set('toJSON', {
  transform,
});
