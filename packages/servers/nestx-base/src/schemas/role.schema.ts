import { SchemaDefaultOptions } from "nestx-common";
import { Typegoose, prop, arrayProp, Ref } from "typegoose";
import { Menu } from "./menu.schema";

export class Role extends Typegoose {
  @prop({ required: true })
  name: string;

  @prop()
  description?: string;

  @arrayProp({ itemsRef: Menu })
  permissions?: Ref<Menu>[];

  static get Model() {
    return new Role().getModelForClass(Role, SchemaDefaultOptions);
  }
}
