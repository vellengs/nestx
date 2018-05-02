import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './server.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(process.env.PORT || 3666);
}
bootstrap();
