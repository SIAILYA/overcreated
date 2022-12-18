import {BaseService} from "../../../common/base/service/base.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {OrderableService} from "../../../common/base/service/orderableService";

@Injectable()
export class ProjectsService extends OrderableService<ProjectModel> {
    constructor(@InjectRepository(ProjectModel) protected readonly projectModelRepository: Repository<ProjectModel>) {
        super(projectModelRepository);
    }

    getAll(): Promise<Array<ProjectModel>> {
        return this.projectModelRepository.findBy({isVisible: true});
    }

    get(id: string): Promise<ProjectModel> {
        return this.projectModelRepository.findOneBy({id: id, isVisible: true});
    }
}
