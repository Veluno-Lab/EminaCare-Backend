import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ExtendedRequest } from '../types/extended-request.type';
import { CaregiverProfilesService } from './caregiver_profiles.service';
import { CreateCaregiverProfileDto } from './dtos/caregiver_profiles-create.dto';
import { UpdateCaregiverProfileDto } from './dtos/caregiver_profiles-update.dto';
import { Role } from 'src/auth/roles.decorator';
import { UserRole } from 'src/users/entities/user.entity';
import { SupabaseAuthGuard } from 'src/auth/supabase-auth.guard';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { Request } from 'express';

@Controller('caregiver-profiles')
@UseGuards(SupabaseAuthGuard, RolesGuard)
@Role(UserRole.CAREGIVER)
export class CaregiverProfilesController {
  constructor(private readonly caregiverProfilesService: CaregiverProfilesService) {}

  @Post()
  async create(@Req() req: ExtendedRequest, @Body() dto: CreateCaregiverProfileDto) {
    const userId = req.user?.id; // lấy ID từ request
    return this.caregiverProfilesService.create(userId, dto);
  }

//   @Get()
//   findAll() {
//     return this.caregiverProfilesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.caregiverProfilesService.findOne(id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() dto: UpdateCaregiverProfileDto) {
//     return this.caregiverProfilesService.update(id, dto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.caregiverProfilesService.remove(id);
//   }
}