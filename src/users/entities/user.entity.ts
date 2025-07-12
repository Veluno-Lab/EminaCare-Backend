import {
  Entity,
  Column,
  OneToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MommyProfile } from '../../mommy_profiles/entities/mommy_profile.entity';
import { CaregiverProfile } from '../../caregiver_profiles/entities/caregiver_profile.entity';

export enum UserRole {
  ADMIN = 'admin',
  MOMMY = 'mommy',
  CAREGIVER = 'caregiver',
}

@Entity('users')
export class User {
  @PrimaryColumn('uuid') // Sử dụng ID từ Supabase làm khóa chính
  id: string;

  @Column({ unique: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  fullName: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ default: false })
  isVerified: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => MommyProfile, (mommy) => mommy.user)
  mommyProfile: MommyProfile;

  @OneToOne(() => CaregiverProfile, (caregiver) => caregiver.user)
  caregiverProfile: CaregiverProfile;
}
