import { Module } from '@nestjs/common';
import { CaregiverServicesService } from './caregiver_services.service';
import { CaregiverServicesController } from './caregiver_services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaregiverService } from './entities/caregiver_service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaregiverService])],
  providers: [CaregiverServicesService],
  controllers: [CaregiverServicesController],
})
export class CaregiverServicesModule {}
