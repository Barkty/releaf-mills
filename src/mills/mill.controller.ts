// src/mills/controllers/mills.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { MillsService } from './mill.service';
import { Mill } from './mill.entity';


@Controller('mills')
export class MillsController {
  constructor(private readonly millsService: MillsService) {}

  @Get()
  async getMills(): Promise<Mill[]> {
    return this.millsService.getAllMills();
  }

  @Post()
  async addMill(@Body() millData: Partial<Mill>): Promise<Mill> {
    return this.millsService.createMill(millData);
  }
}
