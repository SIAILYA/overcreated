import {Controller} from "@nestjs/common";
import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";
import {ProjectTopicModel} from "../entities/projectTopic.model";
import {ProjectsAdminService} from "../services/projects.admin.service";

@Controller('api/v3/admin/portfolio/projects')
export class ProjectsAdminController extends BaseCRUDController<ProjectTopicModel> {
    constructor(private readonly projectsService: ProjectsAdminService) {
        super(projectsService)
    }
}
