import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import serverlessExpress from '@vendia/serverless-express';
import * as cors from 'cors';

let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    const expressApp = app.getHttpAdapter().getInstance();

    // ⚡ Habilitar CORS sobre Express
    expressApp.use(
      cors({
        origin: 'https://travelingplan.vercel.app', // tu frontend
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      })
    );

    // Manejar preflight requests para serverless
    expressApp.options('*', cors());

    await app.init();
    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

export default async function handler(req: any, res: any) {
  const server = await bootstrap();
  return server(req, res);
}
