import { PartialType } from '@nestjs/mapped-types';
import { CreateCareServiceDto } from './care_service-create.dto';

export class UpdateCareServiceDto extends PartialType(CreateCareServiceDto) {}
