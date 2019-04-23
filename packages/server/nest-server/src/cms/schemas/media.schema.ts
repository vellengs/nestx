import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const MediaSchema = new Schema(
  {
    name: t.String,
    caption: t.String,
    description: t.String,
    ext: t.Mixed,
    url: t.String,
    uri: t.String,
  },
  option,
);

MediaSchema.set('toJSON', {
  transform,
});
