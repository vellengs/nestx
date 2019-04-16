import { Schema, SchemaTypes as t, SchemaOptions, model } from 'mongoose';
import { transform } from './../../utils';

export const ProfileSchema = new Schema(
  {
    company: { type: t.String },
    siteUrl: { type: t.String },
    address: { type: t.String },
  },
  { timestamps: true },
);

ProfileSchema.set('toJSON', {
  transform,
});
