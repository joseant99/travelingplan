import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import serverlessExpress from '@vendia/serverless-express';

const cors = require('cors'); // ← cambio aquí

let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    const expressApp = app.getHttpAdapter().getInstance();

    expressApp.use(cors({
      origin: 'https://travelingplan.vercel.app',
      methods: ['GET','POST','OPTIONS'],
      allowedHeaders: ['Content-Type','Authorization']
    }));

    expressApp.options('*', cors());

    await app.init();
    cachedServer = serverlessExpress({ app: expressApp });
  }
  return cachedServer;
}

export default async function handler(req: any, res: any) {
  const server = await bootstrap();
  if (req.url.startsWith('/api/')) req.url = req.url.replace('/api', '');
  return server(req, res);
}
