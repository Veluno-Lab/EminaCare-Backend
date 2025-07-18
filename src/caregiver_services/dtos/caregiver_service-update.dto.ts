import { PartialType } from '@nestjs/mapped-types';
import { CreateCaregiverServiceDto } from './caregiver_service-create.dto';

export class UpdateCaregiverServiceDto extends PartialType(CreateCaregiverServiceDto) {}