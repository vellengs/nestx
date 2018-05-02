import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ApiModule } from './modules/api/api.module';
import { StaticModule } from './modules/static/static.module';
import { CatsModule } from './cats/cats.module';
import { PhotoModule } from './photo/photo.module';
import { EventsGateway } from './events.gateway';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, PhotoModule, ApiModule, CatsModule, StaticModule],
  controllers: [],
  providers: [EventsGateway]
})
export class ApplicationModule { }
