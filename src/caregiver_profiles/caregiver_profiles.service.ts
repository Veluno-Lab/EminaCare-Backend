import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CaregiverProfile } from './entities/caregiver_profile.entity';
import { CreateCaregiverProfileDto } from './dtos/caregiver_profiles-create.dto';
import { UpdateCaregiverProfileDto } from './dtos/caregiver_profiles-update.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CaregiverProfilesService {
  constructor(
    @InjectRepository(CaregiverProfile)
    private readonly caregiverRepo: Repository<CaregiverProfile>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(userId: string, dto: CreateCaregiverProfileDto): Promise<CaregiverProfile> {
    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');
  
    // ✅ Kiểm tra đã có profile chưa
    const existingProfile = await this.caregiverRepo.findOne({
      where: { user: { id: userId } },
    });
  
    if (existingProfile) {
      throw new ConflictException('Caregiver profile already exists for this user');
    }
  
    const profile = this.caregiverRepo.create({ ...dto, user });
    return this.caregiverRepo.save(profile);
  }

  async findAll(): Promise<CaregiverProfile[]> {
    return this.caregiverRepo.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<CaregiverProfile> {
    const profile = await this.caregiverRepo.findOne({ where: { id }, relations: ['user'] });
    if (!profile) throw new NotFoundException('Caregiver profile not found');
    return profile;
  }

  async update(id: string, dto: UpdateCaregiverProfileDto): Promise<CaregiverProfile> {
    const profile = await this.findOne(id);
    Object.assign(profile, dto);
    return this.caregiverRepo.save(profile);
  }

  async remove(id: string): Promise<void> {
    const profile = await this.findOne(id);
    await this.caregiverRepo.remove(profile);
  }
}