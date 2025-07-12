import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { AuthController } from './auth.controller';
import { SupabaseService } from './supabase.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService, SupabaseService, UsersService],
  controllers: [AuthController],
  exports: [SupabaseService, UsersService],
})
export class AuthModule {}
