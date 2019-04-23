import { Schema, SchemaTypes as t } from "mongoose";
import { utils } from "nestx-common";
const { transform } = utils;
export const DictSchema = new Schema(
  {
    category: { type: t.String },
    name: { type: t.String },
    translate: { type: t.String },
    expand: { type: t.Mixed }
  },
  {
    timestamps: true,
    usePushEach: true
  }
);

DictSchema.set("toJSON", {
  transform
});
