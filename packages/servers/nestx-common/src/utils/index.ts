function transform(doc: any, ret: any, options: any) {
  ret.id = ret._id;
  delete ret._id;
}

export const SchemaDefaultOptions = {
  schemaOptions: {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform
    }
  }
};

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
