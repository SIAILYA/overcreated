import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {LoginDto} from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService,
                private readonly configService: ConfigService) {
    }

    checkCredentials(loginData: LoginDto) {
        return loginData.login === this.configService.get<string>('ADMIN_LOGIN') &&
            loginData.password === this.configService.get<string>('ADMIN_PASSWORD');
    }

    generateToken(loginData: LoginDto) {
        return this.jwtService.signAsync({login: loginData.login});
    }

    verifyToken(token: string) {
        return this.jwtService.verifyAsync(token);
    }

    decodeToken(token: string) {
        return this.jwtService.decode(token, {json: true});
    }
}
