import { Typegoose, prop } from "typegoose";
import { SchemaDefaultOptions } from "nestx-common";

export class Appearance extends Typegoose {
  @prop({ required: true })
  name: string;

  @prop()
  options: object;

  @prop()
  data?: object;

  static get Model() {
    return new Appearance().getModelForClass(Appearance, SchemaDefaultOptions);
  }
}
