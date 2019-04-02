import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import {
  UserSchema,
  DictSchema,
  LogSchema,
  MenuSchema,
  RoleSchema,
  SettingSchema,
  NoticeSchema,
  VeryCodeSchema,
} from './schemas';
import { CoreControllers, CoreServices } from './controllers';

const models = [
  { name: 'Dict', schema: DictSchema },
  { name: 'Log', schema: LogSchema },
  { name: 'Menu', schema: MenuSchema },
  { name: 'Role', schema: RoleSchema },
  { name: 'Setting', schema: SettingSchema },
  { name: 'User', schema: UserSchema },
  { name: 'Notice', schema: NoticeSchema },
  { name: 'VeryCode', schema: VeryCodeSchema },
];

@Module({
  imports: [
    MongooseModule.forFeature(models),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  controllers: [...CoreControllers],
  providers: [...CoreServices],
  exports: [...CoreServices]
})
export class CoreModule { }
