// src/mills/entities/mill.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  quantitySold: number;

  @Column()
  pricePerTon: number;

  @Column()
  transactionCount: number;

  @Column()
  lastTransactionDate: Date;
}
