import {Injectable, UnauthorizedException} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
  }


  login(key: string) {
    if (key === this.configService.get("admin.key")) {
      return this.jwtService.sign({username: "admin"}, {secret: process.env.SECRET_KEY})
    }
    return new UnauthorizedException()
  }
}
