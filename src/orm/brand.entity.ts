import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 50 })
  phone: string;

  @Column({ type: "int"}) //length: 14
  siret: number;

}

export class BrandDTO {

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  siret: number;

}