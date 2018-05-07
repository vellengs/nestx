import { Connection } from 'mongoose';
import { schema as CategorySchema } from './schemas/category.schema';

export const CoreProviders = [
  {
    provide: 'CmsModelToken',
    useFactory: (connection: Connection) => {
      connection.model('User', CategorySchema);
    },
    inject: ['DbConnectionToken'],
  },
];
