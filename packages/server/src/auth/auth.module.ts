import { Module, DynamicModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from './../config/config.module';
import { ConfigService } from './../config/config.service';
import { CoreModule } from './../core/core.module';
import { UsersService } from '../core/controllers/users.service';
import { ModuleMetadata } from '@nestjs/common/interfaces';

const defaultMeta = {
  imports: [
    CoreModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secretOrPrivateKey: configService.get('JWT_SECRET_KEY'),
          signOptions: {
            algorithm: configService.get('JWT_ALGORITHM'),
            expiresIn: configService.get('JWT_EXPIRE_IN'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
};

@Module({})
export class AuthModule {
  static registerAsync(options: ModuleMetadata): DynamicModule {
    return {
      imports: options.imports || defaultMeta.imports,
      module: AuthModule,
      controllers: options.controllers || defaultMeta.controllers,
      providers: [...defaultMeta.providers, ...options.providers],
    };
  }
}
