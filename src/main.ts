import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //todo mss (check)
  const mss = app.connectMicroservice({
    transport: Transport.TCP,
  });
  mss.listen(() => console.log('Microservice is listening'));  

  //swagger
  const options = new DocumentBuilder()
    .setTitle('Cars example')
    .setDescription('The cars API description')
    .setVersion('1.0')
    .addTag('cars')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(4200);
}
bootstrap();
