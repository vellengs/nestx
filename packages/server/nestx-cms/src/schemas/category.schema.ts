import { Schema, SchemaTypes as t, SchemaOptions } from "mongoose";
import { utils } from "nestx-common";
const { transform } = utils;

const option: SchemaOptions = {};
option.timestamps = true;

export const CategorySchema = new Schema(
  {
    name: { type: t.String },
    slug: { type: t.String },
    order: { type: t.Number, default: 100 },
    parent: { type: t.ObjectId, ref: "Category" },
    paths: [{ type: t.ObjectId, ref: "Category" }],
    description: { type: t.String }
  },
  option
);

CategorySchema.set("toJSON", {
  transform
});
