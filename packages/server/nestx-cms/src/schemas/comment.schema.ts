import { Schema, SchemaTypes as t, SchemaOptions } from "mongoose";
import { utils } from "nestx-common";
const { transform } = utils;

const option: SchemaOptions = {};
option.timestamps = true;

export const CommentSchema = new Schema(
  {
    name: t.String,
    article: { ref: "Article", type: t.ObjectId },
    text: t.String
  },
  option
);

CommentSchema.set("toJSON", {
  transform
});
