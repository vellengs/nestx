import { Typegoose, prop } from "typegoose";
import { SchemaDefaultOptions } from "nestx-common";

export class Log extends Typegoose {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  operator: string;

  @prop({ required: true })
  ip: string;

  @prop()
  operation?: string;

  @prop()
  result: number;

  @prop()
  elapsed: number;

  @prop()
  comment: string;

  static get Model() {
    return new Log().getModelForClass(Log, SchemaDefaultOptions);
  }
}
