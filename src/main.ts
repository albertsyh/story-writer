import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Structure the base document
  const config = new DocumentBuilder()
    .setTitle('Story Writer API')
    .setDescription('The story writer API documentation')
    .setVersion('1.0')
    .build();
  // Additional options
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Story Writer API Docs',
  };
  // Initialize Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, customOptions);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
