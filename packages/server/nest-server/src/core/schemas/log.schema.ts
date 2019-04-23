import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const LogSchema = new Schema(
  {
    name: {
      type: t.String,
    },
    operator: {
      type: t.String,
    },
    ip: {
      type: t.String,
    },
    operation: {
      type: t.String,
    },
    result: {
      type: t.Number,
    },
    elapsed: {
      type: t.Number,
    },
    comment: {
      type: t.String,
    },
  },
  option,
);

LogSchema.set('toJSON', {
  transform,
});
