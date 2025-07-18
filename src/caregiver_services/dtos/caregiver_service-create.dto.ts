import { IsUUID, IsNumber, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateCaregiverServiceDto {
  @IsUUID()
  caregiverId: string;

  @IsUUID()
  serviceId: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  custom_description?: string;

  @IsOptional()
  @IsNumber()
  duration_minutes?: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}