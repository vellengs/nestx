import { Connection } from 'mongoose';
import { schema as UserSchema } from './schemas/user.schema';
import { schema as RoleSchema } from './schemas/role.schema';
import { schema as MenuSchema } from './schemas/menu.schema';
import { schema as LogSchema } from './schemas/log.schema';
import { schema as DictSchema } from './schemas/dict.schema';
import { schema as SettingSchema } from './schemas/setting.schema';

export const CoreProviders = [
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection) => {
      connection.model('User', UserSchema);
      connection.model('Role', RoleSchema);
      connection.model('Menu', MenuSchema);
      connection.model('Log', LogSchema);
      connection.model('Dict', DictSchema);
      connection.model('Setting', SettingSchema);
    },
    inject: ['DbConnectionToken'],
  },
];
