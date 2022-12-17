import { NestFactory } from '@nestjs/core';
import { AppModule } from './common/app.module';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  app.use(cookieParser());
  await app.listen(5000);
}

bootstrap();