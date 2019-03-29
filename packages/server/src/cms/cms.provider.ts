import { Connection } from 'mongoose';
import { schema as CategorySchema } from './schemas/category.schema';

export const CmsProviders = [
  {
    provide: 'CmsModelToken',
    useFactory: (connection: Connection) => {
      connection.model('Category', CategorySchema);
    },
    inject: ['DbConnectionToken'],
  },
];
