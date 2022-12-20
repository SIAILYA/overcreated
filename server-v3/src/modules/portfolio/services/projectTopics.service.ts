import {BaseService} from "../../../common/base/service/base.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {ProjectTopicModel} from "../entities/projectTopic.model";

@Injectable()
export class ProjectTopicsService extends BaseService<ProjectTopicModel> {
    constructor(@InjectRepository(ProjectTopicModel) protected readonly projectTopicModelRepository: Repository<ProjectTopicModel>) {
        super(projectTopicModelRepository);
    }
}
