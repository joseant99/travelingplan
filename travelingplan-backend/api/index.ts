import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import serverlessExpress from '@vendia/serverless-express';

const cors = require('cors'); // evita problemas de import

let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    const expressApp = app.getHttpAdapter().getInstance();

    expressApp.use(cors({
      origin: 'https://travelingplan.vercel.app',
      methods: ['GET','POST','OPTIONS'],
      allowedHeaders: ['Content-Type','Authorization'],
    }));

    expressApp.options('*', cors());

    await app.init();
    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

export default async function handler(req: any, res: any) {
  const server = await bootstrap();

  // Convierte cualquier URL absoluta a path relativo
  try {
    const urlObj = new URL(req.url, `https://${req.headers.host}`);
    req.url = urlObj.pathname + urlObj.search;
  } catch {
    // si ya es relativo, no hacer nada
  }

  return server(req, res);
}
