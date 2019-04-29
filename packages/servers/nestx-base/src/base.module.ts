import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { SchemaDefaultOptions } from "nestx-common";
import {
  BaseControllers,
  BaseServices,
  AccessManagement,
  LoggerService,
  UsersService
} from "./controllers";
import { AuthModule } from "nestx-auth";
import {
  Dict,
  Log,
  Menu,
  Role,
  Setting,
  User,
  Notice,
  VeryCode,
  Group,
  Profile,
  Appearance
} from "./schemas";
const schemaOptions = SchemaDefaultOptions.schemaOptions;
const models = [
  { typegooseClass: Dict },
  { typegooseClass: Log, schemaOptions },
  { typegooseClass: Menu, schemaOptions },
  { typegooseClass: Role, schemaOptions },
  { typegooseClass: Setting, schemaOptions },
  { typegooseClass: User, schemaOptions },
  { typegooseClass: Notice, schemaOptions },
  { typegooseClass: VeryCode, schemaOptions },
  { typegooseClass: Group, schemaOptions },
  { typegooseClass: Profile, schemaOptions },
  { typegooseClass: Appearance, schemaOptions }
];

@Module({
  imports: [
    TypegooseModule.forFeature(models as any),
    AuthModule.registerAsync({
      imports: [BaseModule],
      providers: [
        {
          provide: "IUserService",
          useClass: UsersService
        }
      ]
    })
  ],
  controllers: [...BaseControllers],
  providers: [
    ...BaseServices,
    {
      provide: "IAccessManagement",
      useClass: AccessManagement
    },
    {
      provide: "ILoggerService",
      useClass: LoggerService
    }
  ],
  exports: [...BaseServices]
})
export class BaseModule {
  // provider config settings to set services;
}
