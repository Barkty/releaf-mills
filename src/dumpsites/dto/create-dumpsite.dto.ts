// src/dumpsites/dto/create-dumpsite.dto.ts
import { IsEnum, IsNotEmpty, IsNumber, IsLatitude, IsLongitude } from 'class-validator';

export class CreateDumpsiteDto {
  @IsLatitude()
  latitude: number;

  @IsLongitude()
  longitude: number;

  @IsNumber()
  @IsNotEmpty()
  capacity: number;

  @IsEnum(['active', 'inactive'])
  @IsNotEmpty()
  status: 'active' | 'inactive';
}
