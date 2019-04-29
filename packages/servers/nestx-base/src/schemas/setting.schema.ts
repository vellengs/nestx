import { SchemaDefaultOptions } from "nestx-common";
import { Typegoose, prop } from "typegoose";

export class Setting extends Typegoose {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  key: string;

  @prop()
  value: object;

  @prop()
  description?: string;

  static get Model() {
    return new Setting().getModelForClass(Setting, SchemaDefaultOptions);
  }
}
