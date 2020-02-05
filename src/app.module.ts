import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { CarController } from './controller/car.controller';
import { AppService } from './service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CarService } from './orm/car.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(), //see ormconfig.json -> WARNING!!! Static glob paths (e.g. dist/**/*.entity{ .ts,.js}) won't work properly with webpack hot reloading
  ],
  controllers: [AppController,CarController],
  providers: [AppService, CarService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
