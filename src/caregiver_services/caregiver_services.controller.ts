import { Controller, Post, Get, Param, Patch, Delete, Body, UseGuards } from '@nestjs/common';
import { CaregiverServicesService } from './caregiver_services.service';
import { CreateCaregiverServiceDto } from './dtos/caregiver_service-create.dto';
import { UpdateCaregiverServiceDto } from './dtos/caregiver_service-update.dto';
import { SupabaseAuthGuard } from '../auth/supabase-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { UserRole } from '../users/entities/user.entity';
import { Role } from '../auth/roles.decorator';

@Controller('caregiver-services')
@UseGuards(SupabaseAuthGuard, RolesGuard)
@Role(UserRole.CAREGIVER)
export class CaregiverServicesController {
  constructor(private readonly caregiverService: CaregiverServicesService) {}

  @Post()
  create(@Body() dto: CreateCaregiverServiceDto) {
    return this.caregiverService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caregiverService.findById(id);
  }

  @Get('caregiver/:caregiverId')
  findByCaregiver(@Param('caregiverId') caregiverId: string) {
    return this.caregiverService.findByCaregiver(caregiverId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCaregiverServiceDto) {
    console.log(id, dto)
    return this.caregiverService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caregiverService.remove(id);
  }
}