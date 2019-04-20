import { Schema, SchemaTypes as t, SchemaOptions, model } from 'mongoose';

export const ContentSchema = new Schema(
  {
    text: t.String,
  },
  { timestamps: true },
);
