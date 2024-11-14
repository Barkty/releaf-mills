// src/dumpsites/dumpsites.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DumpsitesController } from './dumpsite.controller';
import { DumpsitesService } from './dumpsite.service';
import { Dumpsite } from './dumpsite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dumpsite])],
  controllers: [DumpsitesController],
  providers: [DumpsitesService],
})
export class DumpsiteModule {}
