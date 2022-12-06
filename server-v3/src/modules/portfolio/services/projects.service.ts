import {BaseService} from "../../../common/base/service/base.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";

@Injectable()
export class ProjectsService extends BaseService<ProjectModel> {
    constructor(@InjectRepository(ProjectModel) private readonly usersRepository: Repository<ProjectModel>) {
        super(usersRepository);
    }
}
