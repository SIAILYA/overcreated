import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {OrderableService} from "../../../common/base/service/orderable.service";

@Injectable()
export class ProjectsService extends OrderableService<ProjectModel> {
    constructor(@InjectRepository(ProjectModel) protected readonly projectModelRepository: Repository<ProjectModel>) {
        super(projectModelRepository);
    }
}
