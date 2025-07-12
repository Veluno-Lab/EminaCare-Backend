import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaregiverProfilesService } from './caregiver_profiles.service';
import { CaregiverProfilesController } from './caregiver_profiles.controller';
import { CaregiverProfile } from './entities/caregiver_profile.entity';
import { User } from '../users/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([CaregiverProfile, User]), AuthModule, UsersModule],
  controllers: [CaregiverProfilesController],
  providers: [CaregiverProfilesService],
})
export class CaregiverProfilesModule {}