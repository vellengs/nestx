import { SchemaDefaultOptions } from "nestx-common";
import { Typegoose, prop } from "typegoose";

export class Profile extends Typegoose {
  @prop()
  company?: string;

  @prop()
  siteUrl?: string;

  @prop()
  address?: string;

  static get Model() {
    return new Profile().getModelForClass(Profile, SchemaDefaultOptions);
  }
}
