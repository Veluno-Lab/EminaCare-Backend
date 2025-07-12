import { Module } from '@nestjs/common';
import { CareServiceService } from './care_services.service';
import { CareServiceController } from './care_services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CareService } from './entities/care_service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CareService])],
  providers: [CareServiceService],
  controllers: [CareServiceController],
})
export class CareServicesModule {}
