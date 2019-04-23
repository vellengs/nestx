import { Schema, SchemaTypes as t, SchemaOptions, model } from "mongoose";
import { utils } from "nestx-common";
const { transform } = utils;

export const ProfileSchema = new Schema(
  {
    company: { type: t.String },
    siteUrl: { type: t.String },
    address: { type: t.String }
  },
  { timestamps: true }
);

ProfileSchema.set("toJSON", {
  transform
});
