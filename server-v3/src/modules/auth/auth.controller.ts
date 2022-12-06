import {Body, Controller, HttpException, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";

@Controller('api/v3/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    async login(@Body() loginInput: LoginDto): Promise<string | HttpException> {
        if (this.authService.checkCredentials(loginInput)) {
            return this.authService.generateToken(loginInput);
        }

        throw new HttpException('Invalid credentials', 401);
    }
}
