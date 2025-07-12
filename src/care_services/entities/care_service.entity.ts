import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum CareServiceCategory {
  MOTHER = 'mother',
  BABY = 'baby',
  MENTAL = 'mental',
  NUTRITION = 'nutrition',
}

@Entity({ name: 'care_services' })
export class CareService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: CareServiceCategory,
  })
  category: CareServiceCategory;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
