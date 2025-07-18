import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MommyProfile } from './entities/mommy_profile.entity';
import { MommyProfilesService } from './mommy_profiles.service';
import { MommyProfilesController } from './mommy_profiles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MommyProfile])],
  providers: [MommyProfilesService],
  controllers: [MommyProfilesController],
})
export class MommyProfilesModule {}
