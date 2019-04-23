import { Schema, SchemaTypes as t } from "mongoose";
import { utils } from "nestx-common";
const { transform } = utils;

export const AppearanceSchema = new Schema(
  {
    name: { type: t.String },
    options: { type: t.Mixed },
    data: { type: t.Mixed }
  },
  {
    timestamps: true,
    usePushEach: true
  }
);

AppearanceSchema.set("toJSON", {
  transform
});
