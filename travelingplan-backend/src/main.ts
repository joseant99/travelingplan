import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS
  app.enableCors({
  origin: 'https://friendly-carnival-7pprrj6pw63r9vj-4200.app.github.dev', // subdominio exacto del frontend
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
});

  await app.listen(3000);
}
bootstrap();
