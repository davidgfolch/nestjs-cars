import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Logger } from '@nestjs/common';
import { EntityManager, Transaction, TransactionManager } from 'typeorm';
import { Car } from './car.entity';
import { Owner } from './owner.entity';
import { Brand } from './brand.entity';

@Injectable()
export class CarService {

  private readonly log = new Logger(CarService.name);

  constructor(
    // @InjectConnection()
    // private readonly connection: Connection,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
    @TransactionManager()
    private readonly  manager: EntityManager,
  ) {}

  findAll(): Promise<Car[]> {
    this.log.debug("Search for all cars");
    this.log.debug("this.repo="+Object.getOwnPropertyNames(this.entityManager));
    return this.entityManager.find(Car);
  }

  // @Transaction()
  async create(car: Car): Promise<Car> {
    this.log.debug("Create car "+JSON.stringify(car));
    return this.entityManager.transaction(async t => {
      Promise.all([
        t.save(Owner,car.owners),
        t.save(Brand,car.brand)
      ]);
      return t.save(Car,car);  
    }).then((car) => { return car });
  }

}