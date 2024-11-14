// src/dumpsites/services/dumpsites.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dumpsite } from './dumpsite.entity';
import { CreateDumpsiteDto } from './dto/create-dumpsite.dto';
import { UpdateDumpsiteDto } from './dto/update-dumpsite.dto';

@Injectable()
export class DumpsitesService {
  constructor(
    @InjectRepository(Dumpsite)
    private readonly dumpsiteRepository: Repository<Dumpsite>,
  ) {}

  async getAllDumpsites(): Promise<Dumpsite[]> {
    return this.dumpsiteRepository.find();
  }

  async getDumpsiteById(id: number): Promise<Dumpsite> {
    const dumpsite = await this.dumpsiteRepository.findOne({ where: { id } });
    if (!dumpsite) {
      throw new NotFoundException(`Dumpsite with ID ${id} not found`);
    }
    return dumpsite;
  }

  async createDumpsite(createDumpsiteDto: CreateDumpsiteDto): Promise<Dumpsite> {
    const dumpsite = this.dumpsiteRepository.create(createDumpsiteDto);
    return this.dumpsiteRepository.save(dumpsite);
  }

  async updateDumpsite(id: number, updateDumpsiteDto: UpdateDumpsiteDto): Promise<Dumpsite> {
    const dumpsite = await this.getDumpsiteById(id);
    Object.assign(dumpsite, updateDumpsiteDto);
    return this.dumpsiteRepository.save(dumpsite);
  }

  async deleteDumpsite(id: number): Promise<void> {
    const result = await this.dumpsiteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Dumpsite with ID ${id} not found`);
    }
  }
}
