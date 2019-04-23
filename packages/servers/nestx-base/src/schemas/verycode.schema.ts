import { Schema, SchemaTypes as t } from "mongoose";
import { utils } from "nestx-common";
const { transform } = utils;

export const VeryCodeSchema = new Schema(
  {
    mobile: {
      type: t.String
    },
    lastSent: {
      type: t.Decimal128,
      default: Date.now
    },
    code: {
      type: t.String
    }
  },
  {
    timestamps: true,
    usePushEach: true
  }
);

VeryCodeSchema.set("toJSON", {
  transform
});
