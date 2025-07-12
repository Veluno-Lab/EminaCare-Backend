import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CareService } from './entities/care_service.entity';
import { CreateCareServiceDto } from './dtos/care_service-create.dto';
import { UpdateCareServiceDto } from './dtos/care_service-update.dto';

@Injectable()
export class CareServiceService {
  constructor(
    @InjectRepository(CareService)
    private readonly careServiceRepo: Repository<CareService>,
  ) {}

  async create(dto: CreateCareServiceDto): Promise<CareService> {
    const service = this.careServiceRepo.create(dto);
    return this.careServiceRepo.save(service);
  }

  async findAll(): Promise<CareService[]> {
    return this.careServiceRepo.find();
  }

  async findOne(id: string): Promise<CareService> {
    const service = await this.careServiceRepo.findOne({ where: { id } });
    if (!service) throw new NotFoundException('Care service not found');
    return service;
  }

  async update(id: string, dto: UpdateCareServiceDto): Promise<CareService> {
    const service = await this.findOne(id);
    const updated = Object.assign(service, dto);
    return this.careServiceRepo.save(updated);
  }

  async remove(id: string): Promise<void> {
    const service = await this.findOne(id);
    await this.careServiceRepo.remove(service);
  }
}
