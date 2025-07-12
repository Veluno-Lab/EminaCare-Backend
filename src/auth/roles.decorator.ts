import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../users/entities/user.entity';

export const ROLES_KEY = 'role'; // Sửa lại key cho đúng ngữ nghĩa số ít

export const Role = (role: UserRole) => SetMetadata(ROLES_KEY, role);