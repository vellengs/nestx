import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './swagger';
import * as compression from 'compression';
// import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
// import { Utils } from './utils/utils';

async function bootstrap() {
  // const httpsOptions = Utils.getKeyAndCert();
  const app = await NestFactory.create(
    AppModule
  );
  app.setGlobalPrefix('api'); // TODO 
  setupSwagger(app);
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());
  await app.listen(5600);
}
bootstrap();
