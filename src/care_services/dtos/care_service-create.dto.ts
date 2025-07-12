import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { CareServiceCategory } from '../entities/care_service.entity';

export class CreateCareServiceDto {
  @IsString()
  @MaxLength(255)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(CareServiceCategory)
  category: CareServiceCategory;
}
