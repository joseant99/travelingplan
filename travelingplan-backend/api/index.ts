// api/index.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import serverlessExpress from '@vendia/serverless-express';
import * as cors from 'cors';

let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    // Crear la app Nest
    const app = await NestFactory.create(AppModule);

    // Obtener la instancia de Express
    const expressApp = app.getHttpAdapter().getInstance();

    // ⚡ Habilitar CORS
    expressApp.use(
      cors({
        origin: 'https://travelingplan.vercel.app', // tu frontend
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      })
    );

    // Manejar preflight requests
    expressApp.options('*', cors());

    await app.init();

    // Crear serverlessExpress
    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

// Exportar el handler para Vercel
export default async function handler(req: any, res: any) {
  const server = await bootstrap();
  return server(req, res);
}
