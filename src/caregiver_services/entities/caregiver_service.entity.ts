import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  JoinColumn,
} from 'typeorm';
import { CaregiverProfile } from '../../caregiver_profiles/entities/caregiver_profile.entity';
import { CareService } from '../../care_services/entities/care_service.entity';

@Entity({ name: 'caregiver_services' })
@Unique(['caregiver', 'service']) // Mỗi caregiver chỉ định nghĩa 1 service
export class CaregiverService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CaregiverProfile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'caregiver_id' })
  caregiver: CaregiverProfile;

  @ManyToOne(() => CareService, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'service_id' })
  service: CareService;

  @Column({ type: 'integer' })
  price: number; // Đơn vị: VND

  @Column({ type: 'text', nullable: true })
  custom_description: string;

  @Column({ type: 'integer', default: 60 })
  duration_minutes: number; // Thời lượng (phút)

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
