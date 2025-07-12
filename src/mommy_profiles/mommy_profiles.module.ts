import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MommyProfile } from './entities/mommy_profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MommyProfile])],
})
export class MommyProfilesModule {}
