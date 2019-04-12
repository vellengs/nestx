import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './swagger';
import * as compression from 'compression';
// import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppModule } from './app.module';
// import { Utils } from './utils/utils';
// import * as session from 'express-session';
// import * as mongo from 'connect-mongo';
// const MongoStore = mongo(session);
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  // const httpsOptions = Utils.getKeyAndCert();
  const app = await NestFactory.create(
    AppModule
  );

  // app.use(
  //   session({
  //     resave: true,
  //     saveUninitialized: true,
  //     secret: 'SESSION_SECRET',
  //     store: new MongoStore({
  //       url: MONGODB_URI,
  //       autoReconnect: true,
  //     }),
  //   }),
  // );  // TODO user mongo session;
  app.use(cookieParser())
  app.setGlobalPrefix('api'); // TODO 
  setupSwagger(app);
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({
    // disableErrorMessages: true,  // TODO needs only open at dev;
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  app.use(compression());
  await app.listen(5600);
}
bootstrap();
