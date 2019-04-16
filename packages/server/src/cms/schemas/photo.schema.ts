import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const PhotoSchema = new Schema(
  {
    name: {
      type: t.String,
    },
  },
  option,
);
PhotoSchema.set('toJSON', {
  transform,
});
