import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { CarController } from './controller/car.controller';
import { CarRepository } from './orm/car.module';
// import { OwnerRepository } from './orm/owner.module';
// import { BrandRepository } from './orm/brand.module';
import { AppService } from './service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarService } from './orm/car.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(), //see ormconfig.json -> WARNING!!! Static glob paths (e.g. dist/**/*.entity{ .ts,.js}) won't work properly with webpack hot reloading
    CarRepository,
    // OwnerRepository,
    // BrandRepository,
  ],
  controllers: [AppController,CarController],
  providers: [AppService, CarService],
})
export class AppModule {}
