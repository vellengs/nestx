import { Schema, SchemaTypes as t, SchemaOptions, model } from "mongoose";
import { utils } from "nestx-common";
const { transform } = utils;

export const CustomSchema = new Schema(
  {
    name: { type: t.String },
    title: t.String,
    keyword: t.String,
    type: t.String,
    description: t.String,
    author: t.String,
    sort: t.Number,
    disable: t.Boolean,
    category: {
      ref: "Category",
      type: t.ObjectId
    },
    meta: {
      ref: "Meta",
      type: t.ObjectId
    },
    content: {
      ref: "Content",
      type: t.ObjectId
    },
    template: {
      ref: "Content",
      type: t.ObjectId
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform
    },
    strict: false
  }
);
