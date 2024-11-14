import { Module } from '@nestjs/common';
import { MillsController } from './mill.controller';
import { MillsService } from './mill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mill } from './mill.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Mill])],
    controllers: [MillsController],
    providers: [MillsService],
})
export class MillModule {}
