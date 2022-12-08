import {BaseService} from "../../../common/base/service/base.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectTopicModel} from "../entities/projectTopic.model";
import {ProjectTopicsService} from "./projectTopics.service";

@Injectable()
export class ProjectTopicsAdminService extends ProjectTopicsService {
    getAll(): Promise<Array<ProjectTopicModel>> {
        return this.projectTopicModelRepository.find();
    }

    get(id: string): Promise<ProjectTopicModel> {
        return this.projectTopicModelRepository.findOneBy({id: id});
    }
}
