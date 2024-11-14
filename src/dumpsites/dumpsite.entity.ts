// src/dumpsites/entities/dumpsite.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dumpsite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  capacity: number;

  @Column({ type: 'enum', enum: ['active', 'inactive'] })
  status: string;
}
