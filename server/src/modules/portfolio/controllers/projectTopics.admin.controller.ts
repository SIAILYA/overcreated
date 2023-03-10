import {Controller} from "@nestjs/common";
import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";
import {ProjectTopicModel} from "../entities/projectTopic.model";
import {ProjectTopicsService} from "../services/projectTopics.service";

@Controller('api/v3/admin/portfolio/projectTopics')
export class ProjectTopicsAdminController extends BaseCRUDController<ProjectTopicModel> {
    constructor(private readonly projectsService: ProjectTopicsService) {
        super(projectsService)
    }
}
