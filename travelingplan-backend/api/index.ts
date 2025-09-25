// /api/index.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

let cachedApp: any;

async function bootstrap() {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule, { bodyParser: true });

    // Habilitar CORS
    app.enableCors({
      origin: 'https://travelingplan.vercel.app',
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    });

    await app.init();
    cachedApp = app;
  }
  return cachedApp;
}

export default async function handler(req: any, res: any) {
  const app = await bootstrap();

  // ⚡ Ajustar req.url si Vercel envía absoluta
  if (req.url?.startsWith('http')) {
    try {
      const urlObj = new URL(req.url);
      req.url = urlObj.pathname + urlObj.search;
    } catch {}
  }

  // Pasar request a NestJS
  return (app.getHttpAdapter().getInstance() as any)(req, res);
}
