// src/mills/services/mills.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mill } from './mill.entity';

@Injectable()
export class MillsService {
  constructor(
    @InjectRepository(Mill)
    private readonly millRepository: Repository<Mill>,
  ) {}

  /*
  * Service to fetch a mill 
  */
  async getAllMills(): Promise<Mill[]> {
    return this.millRepository.find();
  }

  /*
  * Service to create a new mill 
  */
  async createMill(millData: Partial<Mill>): Promise<Mill> {
    const newMill = this.millRepository.create(millData);
    return this.millRepository.save(newMill);
  }
}
