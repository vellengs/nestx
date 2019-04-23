import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import {
  UserSchema,
  DictSchema,
  LogSchema,
  MenuSchema,
  RoleSchema,
  SettingSchema,
  NoticeSchema,
  VeryCodeSchema,
  GroupSchema,
  ProfileSchema,
  AppearanceSchema
} from "./schemas";
import {
  BaseControllers,
  BaseServices,
  AccessManagement,
  LoggerService,
  UsersService
} from "./controllers";
import { AuthModule } from "nestx-auth";

const models = [
  { name: "Dict", schema: DictSchema },
  { name: "Log", schema: LogSchema },
  { name: "Menu", schema: MenuSchema },
  { name: "Role", schema: RoleSchema },
  { name: "Setting", schema: SettingSchema },
  { name: "User", schema: UserSchema },
  { name: "Notice", schema: NoticeSchema },
  { name: "VeryCode", schema: VeryCodeSchema },
  { name: "Group", schema: GroupSchema },
  { name: "Profile", schema: ProfileSchema },
  { name: "Appearance", schema: AppearanceSchema }
];

@Module({
  imports: [
    MongooseModule.forFeature(models),
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
