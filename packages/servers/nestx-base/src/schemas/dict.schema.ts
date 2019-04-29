import { Typegoose, prop } from "typegoose";
import { SchemaDefaultOptions } from "nestx-common";

export class Dict extends Typegoose {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  category: string;

  @prop({ required: true })
  translate: string;

  @prop()
  expand?: object;

  static get Model() {
    return new Dict().getModelForClass(Dict, SchemaDefaultOptions);
  }
}
