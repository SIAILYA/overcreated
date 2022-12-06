import {Controller} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectsService} from "../services/projects.service";
import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";

@Controller('api/v3/admin/portfolio/projects')
export class ProjectsAdminController extends BaseCRUDController<ProjectModel> {
    constructor(private readonly projectsService: ProjectsService) {
        super(projectsService)
    }
}
