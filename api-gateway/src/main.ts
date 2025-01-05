import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Set a global prefix for all routes
  await app.listen(3000);
  console.log('API Gateway is running on http://localhost:3000');
}
bootstrap();
