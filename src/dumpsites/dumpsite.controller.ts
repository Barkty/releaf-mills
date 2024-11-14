// src/dumpsites/controllers/dumpsites.controller.ts
import { Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { DumpsitesService } from './dumpsite.service';
import { CreateDumpsiteDto } from './dto/create-dumpsite.dto';
import { UpdateDumpsiteDto } from './dto/update-dumpsite.dto';
import { Dumpsite } from './dumpsite.entity';

@Controller('dumpsites')
export class DumpsitesController {
  constructor(private readonly dumpsitesService: DumpsitesService) {}

  @Get()
  async getAllDumpsites(): Promise<Dumpsite[]> {
    return this.dumpsitesService.getAllDumpsites();
  }

  @Get(':id')
  async getDumpsiteById(@Param('id', ParseIntPipe) id: number): Promise<Dumpsite> {
    return this.dumpsitesService.getDumpsiteById(id);
  }

  @Post()
  async createDumpsite(@Body() createDumpsiteDto: CreateDumpsiteDto): Promise<Dumpsite> {
    return this.dumpsitesService.createDumpsite(createDumpsiteDto);
  }

  @Patch(':id')
  async updateDumpsite(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDumpsiteDto: UpdateDumpsiteDto,
  ): Promise<Dumpsite> {
    return this.dumpsitesService.updateDumpsite(id, updateDumpsiteDto);
  }

  @Delete(':id')
  async deleteDumpsite(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.dumpsitesService.deleteDumpsite(id);
  }
}
