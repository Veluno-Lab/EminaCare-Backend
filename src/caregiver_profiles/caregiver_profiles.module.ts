import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaregiverProfile } from './entities/caregiver_profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaregiverProfile])],
})
export class CaregiverProfilesModule {}
