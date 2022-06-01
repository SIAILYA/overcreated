import {Body, Controller, Get, Post, Res, Response} from '@nestjs/common';
import {AuthService} from "../auth/auth.service";

@Controller('api')
export class ApiController {
  constructor(private readonly authService: AuthService) {
  }

  @Get('status')
  getStatus() {
    return 'Overcreated API service is running now! Uptime: ' + parseInt(process.uptime().toString()) + ' seconds';
  }

  @Post('login')
  login(@Body() loginData, @Res({passthrough: true}) response: Response) {
    const token = this.authService.login(loginData.key)
    // @ts-ignore
    response.cookie("token", token, {maxAge: 60 * 60 * 1000})

    return token
  }
}
