import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private readonly supabase: SupabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) return false;

    try {
      const user = await this.supabase.getUserFromToken(token);
      req.user = user;
      return true;
    } catch {
      return false;
    }
  }
}
