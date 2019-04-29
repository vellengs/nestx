import { Typegoose, prop, Ref, arrayProp } from "typegoose";
import { SchemaDefaultOptions } from "nestx-common";
import { User } from "./user.schema";

export class Group extends Typegoose {
  @prop()
  outid?: number;

  @prop({ required: true })
  name: string;

  @prop()
  icon?: string;

  @prop({ default: false })
  isRegion: boolean;

  @prop({ default: 0 })
  order: number;

  @prop({ ref: Group })
  parent: Ref<Group>;

  @arrayProp({ itemsRef: Group })
  paths: Ref<Group>[];

  @prop({ ref: User })
  director: Ref<User>;

  @prop()
  description?: string;

  static get Model() {
    return new Group().getModelForClass(Group, SchemaDefaultOptions);
  }
}
