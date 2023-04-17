import * as dotenv from 'dotenv';
dotenv.config();

import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  /*
     Here it's assumed that public and views are in the root directory,
     alongside with src. You can put them wherever you want, 
     just use the correct path if you use another folder.
  */
     const config = new DocumentBuilder()
     .setTitle('Food Order app')
     .setDescription('The Food order API leírása')
     .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('docs', app, document);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.useGlobalPipes(new ValidationPipe({forbidUnknownValues: false}));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
