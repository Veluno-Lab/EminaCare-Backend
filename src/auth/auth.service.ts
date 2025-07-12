// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  private supabase;

  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {
    this.supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!, // Service role key để xác thực Supabase
    );
  }

  async register(email: string, password: string): Promise<any> {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw new UnauthorizedException(error.message);

    const { user } = data;

    // Sync với DB nếu chưa có
    const existing = await this.userRepo.findOne({ where: { id: user.id } });

    if (!existing) {
      const newUser = this.userRepo.create({
        id: user.id,
        email: user.email,
        role: UserRole.MOMMY,
        isVerified: false,
      });
      await this.userRepo.save(newUser);
    }

    return {
      id: user.id,
      email: user.email,
    };
  }

  async login(email: string, password: string): Promise<any> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new UnauthorizedException(error.message);

    const { user, session } = data;

    return {
      access_token: session.access_token,
      refresh_token: session.refresh_token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  async logout(refresh_token: string): Promise<any> {
    const { error } = await this.supabase.auth.signOut({
      refreshToken: refresh_token,
    });

    if (error) throw new UnauthorizedException(error.message);

    return { message: 'Logout successful' };
  }
}
