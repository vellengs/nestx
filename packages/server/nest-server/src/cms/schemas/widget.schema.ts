import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const WidgetSchema = new Schema(
  {
    name: {
      type: t.String,
    },
  },
  option,
);
WidgetSchema.set('toJSON', {
  transform,
});
