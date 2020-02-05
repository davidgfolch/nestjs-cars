
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Owner, OwnerDTO } from './owner.entity';
import { Brand, BrandDTO } from './brand.entity';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Brand, {
    cascade: true,
  })
  @JoinColumn()
  brand: Brand;

  @Column('float')
  price: number;

  @Column()
  firstRegistrationDate: Date;

  @OneToMany(type => Owner, owner => owner.car)
  owners: Owner[];

}

export class CarDTO {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: () => BrandDTO })
  brand: BrandDTO;

  @ApiProperty()
  price: number;

  @ApiProperty()
  firstRegistrationDate: Date;

  @ApiProperty({ type: () => [OwnerDTO] })
  owners: OwnerDTO[];

}