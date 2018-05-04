import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PhotoModule } from './photo/photo.module';
import { EventsGateway } from './events.gateway';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PhotoModule, UsersModule],
  controllers: [],
  providers: [EventsGateway]
})
export class ApplicationModule { }
