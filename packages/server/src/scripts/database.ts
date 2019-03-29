import {
  SettingSchema,
  DictSchema,
  LogSchema,
  MenuSchema,
  RoleSchema,
  UserSchema,
  GroupSchema
} from './../core/schemas';
import { model } from 'mongoose';
import {
  DictModel,
  LogModel,
  MenuModel,
  RoleModel,
  UserModel,
  SettingModel,
  GroupModel
} from './../core/interfaces';
export const CoreDatabase = {
  Dict: model<DictModel>('Dict', DictSchema),
  Log: model<LogModel>('Log', LogSchema),
  Menu: model<MenuModel>('Menu', MenuSchema),
  Role: model<RoleModel>('Role', RoleSchema),
  User: model<UserModel>('User', UserSchema),
  Setting: model<SettingModel>('Setting', SettingSchema),
  Group: model<GroupModel>('Group', GroupSchema)
};
