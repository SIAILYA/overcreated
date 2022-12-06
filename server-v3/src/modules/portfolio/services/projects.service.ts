import {BaseService} from "../../../base/service/base.service";
import {ProjectModel} from "../entities/project.model";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ProjectsService extends BaseService<ProjectModel> {
    constructor(@InjectRepository(ProjectModel) private readonly usersRepository: Repository<ProjectModel>) {
        super(usersRepository);
    }
}
