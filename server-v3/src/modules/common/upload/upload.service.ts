import {Injectable} from "@nestjs/common";
import {PicturesService} from "../pictures/pictures.service";
import {PictureModel} from "../pictures/picture.model";

@Injectable()
export class UploadService {
    constructor(private readonly picturesService: PicturesService) {
    }

    savePicture(file: Express.Multer.File) {
        return this.picturesService.create({url: file.path} as PictureModel)
    }
}
