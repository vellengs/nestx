import { ObjectID } from "typeorm";

function transform(
  _doc: any,
  ret: {
    [key: string]: any;
    _id: ObjectID;
    __v: string;
  },
  _options: any
) {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
}

function strip(obj: { [k: string]: any }) {
  Object.keys(obj).forEach(key =>
    obj[key] === undefined ? delete obj[key] : ""
  );
  return Object.assign({}, obj);
}

export const utils = {
  transform,
  strip
};
