import {Body, Controller, Get, Post, Query, Res, Response, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {copyFile, unlink} from 'fs/promises';
import {AuthService} from "../auth/auth.service";
import {join} from 'path';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

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

  @UseGuards(JwtAuthGuard)
  @Post('upload_picture')
  @UseInterceptors(FileInterceptor('file'))
  async upload_picture(
    @UploadedFile() file: Express.Multer.File,
    @Query('fileName') fileName: string = null
  ) {
    const ext = file.originalname.split(".")[file.originalname.split(".").length - 1]
    const onlyName = fileName || file.originalname.split(".").splice(file.originalname.split(".").length - 2, 1).join("")
    const uploadDate = new Date().getTime()
    const saveName = onlyName + '_' + uploadDate + '.' + ext

    await copyFile(join('..', 'server', file.path), join('..', 'server', 'public', 'upload', saveName))
    await unlink(file.path)

    return join('upload', saveName)
  }
}
