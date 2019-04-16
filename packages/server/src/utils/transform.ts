import { ObjectID } from 'bson';
export function transform(
  _doc: any,
  ret: {
    [key: string]: any;
    _id: ObjectID;
    __v: string;
  },
  _options: any,
) {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
}
