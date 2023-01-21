import {Injectable} from "@nestjs/common";
import {PicturesService} from "../pictures/pictures.service";
import {PictureModel} from "../pictures/picture.model";

@Injectable()
export class UploadService {
    constructor(private readonly picturesService: PicturesService) {
    }

    async savePicture(file: Express.Multer.File) {
        return await this.picturesService.create({path: file.path} as PictureModel)
    }
}
