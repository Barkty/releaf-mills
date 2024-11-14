// src/dumpsites/dto/update-dumpsite.dto.ts
import { IsEnum, IsOptional, IsNumber, IsLatitude, IsLongitude } from 'class-validator';

export class UpdateDumpsiteDto {
  @IsLatitude()
  @IsOptional()
  latitude?: number;

  @IsLongitude()
  @IsOptional()
  longitude?: number;

  @IsNumber()
  @IsOptional()
  capacity?: number;

  @IsEnum(['active', 'inactive'])
  @IsOptional()
  status?: 'active' | 'inactive';
}
