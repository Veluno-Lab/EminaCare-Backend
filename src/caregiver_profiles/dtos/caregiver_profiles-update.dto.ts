import { PartialType } from '@nestjs/mapped-types';
import { CreateCaregiverProfileDto } from './caregiver_profiles-create.dto';

export class UpdateCaregiverProfileDto extends PartialType(CreateCaregiverProfileDto) {}
