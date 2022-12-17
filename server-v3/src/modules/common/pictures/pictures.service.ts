import {BaseService} from "../../../common/base/service/base.service";
import {PictureModel} from "./picture.model";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PicturesService extends BaseService<PictureModel> {
    constructor(@InjectRepository(PictureModel) protected readonly pictureModelRepository: Repository<PictureModel>) {
        super(pictureModelRepository)
    }
}
