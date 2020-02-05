import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { Owner } from './owner.entity';
import { CarService } from './car.service';
import { CarController } from '../controller/car.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Car,Owner])],
  providers: [CarService],
  controllers: [CarController],
  exports: [TypeOrmModule],
})
export class CarRepository {}