import {Controller} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectsAdminService} from "../services/projects.admin.service";
import {OrderableController} from "../../../common/base/controller/orderable.controller";

@Controller('api/v3/admin/portfolio/projects')
export class ProjectsAdminController extends OrderableController<ProjectModel> {
    constructor(private readonly projectsService: ProjectsAdminService) {
        super(projectsService)
    }
}
