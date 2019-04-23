import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CmsModule } from 'nestx-cms';
import { MONGODB_URI } from './utils';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModule } from 'nestx-base';
import { MockController } from './mock/mock.controller';
import { MockService } from './mock/mock.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MongooseModule.forRoot(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    BaseModule,
    CmsModule,
  ],
  controllers: [AppController, MockController],
  providers: [AppService, MockService],
})
export class AppModule {}
