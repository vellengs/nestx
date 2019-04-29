import { Typegoose, prop, Ref, arrayProp } from "typegoose";
import { SchemaDefaultOptions } from "nestx-common";

export class Menu extends Typegoose {
  @prop({ required: true })
  name: string;

  @prop()
  slug: string;

  @prop()
  group: boolean;

  @prop()
  link?: string;

  @prop()
  externalLink?: string;

  @prop()
  blank?: string;

  @prop()
  icon?: string;

  @prop({ default: 0 })
  order: number;

  @prop({ default: true })
  enable: boolean;

  @prop({ default: false })
  expanded: boolean;

  @prop()
  acl?: string;

  @arrayProp({ itemsRef: Menu })
  paths?: Ref<Menu>[];

  @prop({ ref: Menu })
  parent?: Ref<Menu>;

  @arrayProp({ itemsRef: Menu })
  permissions?: Ref<Menu>[];

  @prop({ default: true })
  isMenu: boolean;

  static get Model() {
    return new Menu().getModelForClass(Menu, SchemaDefaultOptions);
  }
}
