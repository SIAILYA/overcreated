import {ExecutionContext, Injectable, UnauthorizedException,} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard {
  constructor(
    private readonly jwtService: JwtService,
  ) {
  }

  canActivate(context: ExecutionContext) {
    const request = context.getArgByIndex(0);
    const token = request.body?.token || request.headers?.authorization?.split(" ")[1] || request.headers?.cookie?.replace("token=", "")

    try {
      this.jwtService.verify(token)
      return context
    } catch (e) {
      new UnauthorizedException()
    }
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      new UnauthorizedException();
    }
    return user;
  }
}
