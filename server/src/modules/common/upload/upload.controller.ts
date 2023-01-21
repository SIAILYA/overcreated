import {Controller, Post, Req, UploadedFiles, UseGuards, UseInterceptors} from "@nestjs/common";
import {FilesInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {v4} from "uuid";
import {AuthGuard} from "../../auth/auth.guard";
import {UploadService} from "./upload.service";

@Controller('api/v3/admin/upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {
    }

    @UseGuards(AuthGuard)
    @Post('/pictures')
    @UseInterceptors(FilesInterceptor('file', 10, {
        fileFilter(req, file, cb) {
            if (file.originalname.match(/\.(png|jpg|jpeg|webp|svg)$/)) {
                cb(null, true)
            } else {
                cb(null, false)
            }
        },
        storage: diskStorage({
            destination: './uploads',
            filename(req, file, cb) {
                const _ = file.originalname.split('.')
                const fileExt = _[_.length - 1];
                const resultName = `${_.slice(0, _.length - 1).join('.')}_${v4()}.${fileExt}`;

                cb(null, resultName)
            }
        })
    }))
    async upload(@UploadedFiles() files: Array<Express.Multer.File>, @Req() req: Request) {
        return await Promise.all(files.map(async file => await this.uploadService.savePicture(file)))
    }
}
