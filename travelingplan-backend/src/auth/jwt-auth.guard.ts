import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];
    const decoded = await this.authService.verifyToken(token);
    if (!decoded) return false;

    request.user = decoded; // guardar info del usuario
    return true;
  }
}
