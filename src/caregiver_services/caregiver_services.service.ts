import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CaregiverService } from './entities/caregiver_service.entity';
import { CreateCaregiverServiceDto } from './dtos/caregiver_service-create.dto';
import { UpdateCaregiverServiceDto } from './dtos/caregiver_service-update.dto';
import { CaregiverProfile } from '../caregiver_profiles/entities/caregiver_profile.entity';
import { CareService } from '../care_services/entities/care_service.entity';

@Injectable()
export class CaregiverServicesService {
  constructor(
    @InjectRepository(CaregiverService)
    private caregiverServiceRepo: Repository<CaregiverService>,

    @InjectRepository(CaregiverProfile)
    private caregiverProfileRepo: Repository<CaregiverProfile>,

    @InjectRepository(CareService)
    private careServiceRepo: Repository<CareService>,
  ) {}

  async create(dto: CreateCaregiverServiceDto): Promise<CaregiverService> {
    const caregiver = await this.caregiverProfileRepo.findOneBy({ id: dto.caregiverId });
    if (!caregiver) throw new NotFoundException('Caregiver not found');

    const service = await this.careServiceRepo.findOneBy({ id: dto.serviceId });
    if (!service) throw new NotFoundException('Service not found');

    const entity = this.caregiverServiceRepo.create({
      caregiver,
      service,
      price: dto.price,
      custom_description: dto.custom_description,
      duration_minutes: dto.duration_minutes || 60,
      is_active: dto.is_active ?? true,
    });

    return this.caregiverServiceRepo.save(entity);
  }

  async findById(id: string): Promise<CaregiverService> {
    const service = await this.caregiverServiceRepo.findOne({
      where: { id },
      relations: ['caregiver', 'service'],
    });
    if (!service) throw new NotFoundException('Caregiver service not found');
    return service;
  }

  async findByCaregiver(caregiverId: string): Promise<CaregiverService[]> {
    return this.caregiverServiceRepo.find({
      where: { caregiver: { id: caregiverId } },
      relations: ['service'],
    });
  }

  async update(id: string, dto: UpdateCaregiverServiceDto): Promise<CaregiverService> {
    const service = await this.findById(id);

    if (dto.price !== undefined) service.price = dto.price;
    if (dto.custom_description !== undefined) service.custom_description = dto.custom_description;
    if (dto.duration_minutes !== undefined) service.duration_minutes = dto.duration_minutes;
    if (dto.is_active !== undefined) service.is_active = dto.is_active;

    return this.caregiverServiceRepo.save(service);
  }

  async remove(id: string): Promise<void> {
    const service = await this.findById(id);
    await this.caregiverServiceRepo.remove(service);
  }
}