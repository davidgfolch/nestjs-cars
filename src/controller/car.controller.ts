import { Controller, Get, Put, Post, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CarService } from '../orm/car.service';
import { Car, CarDTO } from '../orm/car.entity';

@Controller('car')
export class CarController {
  constructor(private readonly service: CarService) {}

  @Get('findAll')
  findAll(): Promise<Car[]> {
    return this.service.findAll();
  }

  @Post()
  // @ApiBody({schema: {default: CarDTO, example: CarDTO}})
  create(@Body() car: CarDTO): Promise<Car> {
  //create(@Body() car: CarDTO): Car | void {
    return this.service.create(car);
  }
}
