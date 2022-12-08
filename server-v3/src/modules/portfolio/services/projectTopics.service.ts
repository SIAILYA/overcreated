import {BaseService} from "../../../common/base/service/base.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectTopicModel} from "../entities/projectTopic.model";

@Injectable()
export class ProjectTopicsService extends BaseService<ProjectTopicModel> {
    constructor(@InjectRepository(ProjectModel) protected readonly projectTopicModelRepository: Repository<ProjectTopicModel>) {
        super(projectTopicModelRepository);
    }

    getAll(): Promise<Array<ProjectTopicModel>> {
        return this.projectTopicModelRepository.findBy({isVisible: true});
    }

    get(id: string): Promise<ProjectTopicModel> {
        return this.projectTopicModelRepository.findOneBy({id: id, isVisible: true});
    }
}
