import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoreProviders } from './core.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...CoreProviders],
})
export class CoreModule { }
