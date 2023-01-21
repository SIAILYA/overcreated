import {BaseService} from "../../../common/base/service/base.service";
import {TechModel} from "../entities/tech.model";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {GetAllParamsDto} from "../../../common/base/controller/dto/getAll.params.dto";

export class TechsService extends BaseService<TechModel> {
    constructor(@InjectRepository(TechModel) protected readonly techModelRepository: Repository<TechModel>) {
        super(techModelRepository);
    }

    getAllVisible(getAllParams: GetAllParamsDto): Promise<Array<TechModel>> {
        return this.getAll(getAllParams);
    }
}
