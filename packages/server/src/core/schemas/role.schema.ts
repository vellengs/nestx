import { Schema, SchemaTypes as t, SchemaOptions } from 'mongoose';
import { transform } from './../../utils';

const option: SchemaOptions = {};
option.timestamps = true;

export const RoleSchema = new Schema(
  {
    name: { type: t.String },
    description: { type: t.String },
    permissions: [{ type: t.ObjectId, ref: 'Menu' }],
  },
  option,
);

RoleSchema.set('toJSON', {
  transform,
});
