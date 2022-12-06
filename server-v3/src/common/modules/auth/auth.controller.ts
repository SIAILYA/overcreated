import {Body, Controller, Get, HttpException, Post, UseGuards} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
import {AuthGuard} from "./auth.guard";

@Controller('auth')
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

    @UseGuards(AuthGuard)
    @Get('check')
    async check() {
        return 'ok';
    }
}
