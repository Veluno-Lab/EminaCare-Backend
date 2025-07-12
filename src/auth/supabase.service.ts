import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  private supabase;

  constructor(private readonly configService: ConfigService) {
    console.log(this.configService.get('SUPABASE_URL'));
    console.log(this.configService.get('SUPABASE_SERVICE_ROLE_KEY'));
    this.supabase = createClient(
      this.configService.get('SUPABASE_URL'),
      this.configService.get('SUPABASE_SERVICE_ROLE_KEY'), // phải là service role
    );
  }

  async getUserFromToken(token: string) {
    const { data, error } = await this.supabase.auth.getUser(token);
    if (error) throw new Error('Invalid token');
    return data.user;
  }
}
