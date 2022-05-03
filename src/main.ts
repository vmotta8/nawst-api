import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApplicationConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ApplicationConfig.port);
}
bootstrap();
