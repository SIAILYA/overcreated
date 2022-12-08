import {Controller} from "@nestjs/common";
import {ProjectsService} from "../services/projects.service";
import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {ProjectTopicModel} from "../entities/projectTopic.model";

@Controller('api/v3/portfolio/projectTopics')
export class ProjectTopicsController extends BaseReadController<ProjectTopicModel> {
    constructor(private readonly projectsService: ProjectsService) {
        super(projectsService)
    }
}
