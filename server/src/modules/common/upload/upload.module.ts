import {Module} from "@nestjs/common";
import {UploadController} from "./upload.controller";
import {MulterModule} from "@nestjs/platform-express";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UploadService} from "./upload.service";
import {PicturesService} from "../pictures/pictures.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PictureModel} from "../pictures/picture.model";

@Module({
    imports: [
        MulterModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                dest: configService.get<string>('UPLOAD_PATH')
            }),
            inject: [ConfigService],
        }),
        TypeOrmModule.forFeature([PictureModel]),
    ],
    providers: [UploadService, PicturesService],
    exports: [UploadService, PicturesService, TypeOrmModule],
    controllers: [UploadController]
})
export class UploadModule {
}
