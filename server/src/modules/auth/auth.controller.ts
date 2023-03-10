import {Body, Controller, HttpException, Post, Res} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {LoginDto} from "./dto/login.dto";
import type {Response} from "express";

@Controller('api/v3/admin/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('login')
    async login(@Body() loginInput: LoginDto, @Res({passthrough: true}) response: Response): Promise<string | HttpException> {
        if (this.authService.checkCredentials(loginInput)) {
            const token = this.authService.generateToken(loginInput);
            response.cookie('token', token);

            return token
        }

        throw new HttpException('Invalid credentials', 401);
    }
}
