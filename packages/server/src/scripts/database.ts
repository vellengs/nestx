import * as mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { model, Connection } from 'mongoose';
import {
  SettingSchema,
  DictSchema,
  LogSchema,
  MenuSchema,
  RoleSchema,
  UserSchema,
  GroupSchema
} from './../core/schemas';

import {
  DictModel,
  LogModel,
  MenuModel,
  RoleModel,
  UserModel,
  SettingModel,
  GroupModel
} from './../core/interfaces';

import { MONGODB_URI } from './../utils/secrets';

export function connect(uri: string) {
  (mongoose as any).Promise = bluebird;
  mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
    console.log('success connected to', uri);
  });
  const db = mongoose.connection;
  db.on('error', (err: any) => {
    throw new Error('unable to connect to database at ' + uri + err);
  });
  return db;
}

export const context = connect(MONGODB_URI);

export const CoreDatabase = {
  Dict: model<DictModel>('Dict', DictSchema),
  Log: model<LogModel>('Log', LogSchema),
  Menu: model<MenuModel>('Menu', MenuSchema),
  Role: model<RoleModel>('Role', RoleSchema),
  User: model<UserModel>('User', UserSchema),
  Setting: model<SettingModel>('Setting', SettingSchema),
  Group: model<GroupModel>('Group', GroupSchema)
};
