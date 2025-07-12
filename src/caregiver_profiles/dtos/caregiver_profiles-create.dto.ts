import { IsOptional, IsString, IsArray, IsNumber, IsUUID } from 'class-validator';

export class CreateCaregiverProfileDto {

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsArray()
  certifications?: string[];

  @IsOptional()
  @IsArray()
  skills?: string[];
}