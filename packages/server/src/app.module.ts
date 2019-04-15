import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CommerceModule } from './commerce/commerce.module';
import { CmsModule } from './cms/cms.module';
import { MONGODB_URI } from './utils/secrets';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from './config';
import { resolve } from 'path';
import * as multer from 'multer';

// MulterModule.register({
//   storage  // TODO can be store on cloud
// }),

const uploads = resolve(process.cwd(), 'uploads');

console.log('uploads,,,', uploads);
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MongooseModule.forRoot(MONGODB_URI, { useNewUrlParser: true }),
    AuthModule,
    CoreModule,
    CmsModule,
    CommerceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
