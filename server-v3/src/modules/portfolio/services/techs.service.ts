import {BaseService} from "../../../common/base/service/base.service";
import {TechModel} from "../entities/tech.model";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

export class TechsService extends BaseService<TechModel> {
    constructor(@InjectRepository(TechModel) protected readonly techModelRepository: Repository<TechModel>) {
        super(techModelRepository);
    }
}
