import {ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException,} from '@nestjs/common';
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
      //FIXME: jwtService должен инжектиться (вместе с secret)
      this.jwtService.verify(token, {secret: process.env.SECRET_KEY})
      return context
    } catch (e) {
      new HttpException(e, HttpStatus.FORBIDDEN);
    }
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      new UnauthorizedException();
    }
    return user;
  }
}
