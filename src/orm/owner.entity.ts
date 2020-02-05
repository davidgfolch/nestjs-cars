import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Car, CarDTO } from './car.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  purchaseDate: Date;

  @ManyToOne(type => Car, car => car.owners, {
    cascade: true
  })
  car: Car;

}

export class OwnerDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  purchaseDate: Date;

  @ApiProperty({ type: () => CarDTO})
  car: CarDTO;

}