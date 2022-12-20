import {Controller} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {OrderableController} from "../../../common/base/controller/orderable.controller";
import {ProjectsService} from "../services/projects.service";

@Controller('api/v3/admin/portfolio/projects')
export class ProjectsAdminController extends OrderableController<ProjectModel> {
    constructor(private readonly projectsService: ProjectsService) {
        super(projectsService)
    }
}
