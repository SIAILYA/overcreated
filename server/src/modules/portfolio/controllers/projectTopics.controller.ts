import {Controller} from "@nestjs/common";
import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {ProjectTopicModel} from "../entities/projectTopic.model";
import {ProjectTopicsService} from "../services/projectTopics.service";

@Controller('api/v3/portfolio/projectTopics')
export class ProjectTopicsController extends BaseReadController<ProjectTopicModel> {
    constructor(private readonly projectsService: ProjectTopicsService) {
        super(projectsService)
    }
}
