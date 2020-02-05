import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './car.entity';
// import { Brand } from './brand.entity';
// import { Owner } from './owner.entity';

@Injectable()
export class CarService {

  private readonly log = new Logger(CarService.name);

  constructor(
    @InjectRepository(Car)
    private readonly repo: Repository<Car>,
    // @InjectRepository(Brand)
    // private readonly repoBrand: Repository<Brand>,
    // @InjectRepository(Owner)
    // private readonly repoOwner: Repository<Owner>,
  ) {}

  findAll(): Promise<Car[]> {
    this.log.debug("Search for all cars");
    this.log.debug("this.repo="+this.repo.constructor.name);
    this.log.debug("this.repo="+Object.getOwnPropertyNames(this.repo));
    return this.repo.find();
  }

  async create(car: Car): Promise<Car> {
    this.log.debug("Create car "+JSON.stringify(car));
    let newCar=this.repo.create(car);
    this.log.debug("Create car "+JSON.stringify(newCar));
    // let brand=this.repoBrand.create(car.brand);
    // let owners=this.repoOwner.create(car.owners);
    // newCar.brand=brand;
    // newCar.owners=owners;
    // await this.repoBrand.save(brand);
    // await this.repoOwner.save(owners);
    return this.repo.save(newCar);
  }

}