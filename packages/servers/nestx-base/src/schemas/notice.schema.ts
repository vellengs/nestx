import { SchemaDefaultOptions } from "nestx-common";
import { Typegoose, prop } from "typegoose";

export class Notice extends Typegoose {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  type: string;

  @prop()
  extra?: string;

  @prop()
  status?: string;

  @prop({ default: false })
  read: boolean;

  static get Model() {
    return new Notice().getModelForClass(Notice, SchemaDefaultOptions);
  }
}
