
import { Module } from '@nestjs/common';
import { CarRepository } from './car.module';
import { CarService } from './car.service';
import { CarController } from '../controller/car.controller';

@Module({
  imports: [CarRepository],
  providers: [CarService],
  controllers: [CarController]
})
export class CarHttpModule {}