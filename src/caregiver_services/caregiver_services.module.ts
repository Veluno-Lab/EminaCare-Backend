import { Module } from '@nestjs/common';
import { CaregiverServicesService } from './caregiver_services.service';
import { CaregiverServicesController } from './caregiver_services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaregiverService } from './entities/caregiver_service.entity';
import { CaregiverProfile } from '../caregiver_profiles/entities/caregiver_profile.entity';
import { CareService } from '../care_services/entities/care_service.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([CaregiverService, CaregiverProfile, CareService]), AuthModule],
  providers: [CaregiverServicesService],  
  controllers: [CaregiverServicesController],
})
export class CaregiverServicesModule {}
