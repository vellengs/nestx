import { SchemaDefaultOptions } from "nestx-common";
import { Typegoose, prop } from "typegoose";

export class VeryCode extends Typegoose {
  @prop({ required: true })
  mobile: string;

  @prop({ default: Date.now })
  lastSent: number;

  @prop()
  code?: string;

  static get Model() {
    return new VeryCode().getModelForClass(VeryCode, SchemaDefaultOptions);
  }
}
