import { Module, DynamicModule } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { ConfigModule, ConfigService } from "nestx-config";
import { ModuleMetadata } from "@nestjs/common/interfaces";
import { JWT_SECRET_KEY, JWT_ALGORITHM, JWT_EXPIRE_IN } from "./constants";

export const defaultMeta = {
  imports: [
    PassportModule.register({ defaultStrategy: "jwt", session: true }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secretOrPrivateKey: configService.get(JWT_SECRET_KEY),
          signOptions: {
            algorithm: configService.get(JWT_ALGORITHM),
            expiresIn: configService.get(JWT_EXPIRE_IN)
          }
        };
      },
      inject: [ConfigService]
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
};

@Module({})
export class AuthModule {
  static registerAsync(options: ModuleMetadata): DynamicModule {
    const imports = [...defaultMeta.imports, ...(options.imports || [])];
    const providers = [...defaultMeta.providers, ...(options.providers || [])];
    const controllers = [
      ...defaultMeta.controllers,
      ...(options.controllers || [])
    ];

    return {
      imports,
      module: AuthModule,
      controllers,
      providers
    };
  }
}
