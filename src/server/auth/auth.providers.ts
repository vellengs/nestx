import { JWT_OPTIONS } from './auth.constants';
import { JwtOptions } from './interfaces/jwt-options.interface';

export const authProviders = [
    {
        provide: JWT_OPTIONS,
        useValue: {
            expiresIn: 86400,
            secret: 'nestx-secret',
        } as JwtOptions,
    },
];
