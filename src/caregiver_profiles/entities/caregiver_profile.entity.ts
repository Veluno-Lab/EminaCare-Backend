import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('caregiver_profiles')
export class CaregiverProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.caregiverProfile, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'float', nullable: true })
  latitude: number;

  @Column({ type: 'float', nullable: true })
  longitude: number;

  @Column({ type: 'jsonb', nullable: true })
  certifications: string[]; // URLs hoặc mô tả file

  @Column({ type: 'jsonb', nullable: true })
  skills: string[]; // Ví dụ: ["Tắm bé", "Massage hậu sản"]

  @Column({ default: false })
  isApproved: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
