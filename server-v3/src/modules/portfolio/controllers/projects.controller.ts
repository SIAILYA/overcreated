import {Controller} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectsService} from "../services/projects.service";
import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";

@Controller('portfolio/projects')
export class ProjectsController extends BaseCRUDController<ProjectModel> {
    constructor(private readonly projectsService: ProjectsService) {
        super(projectsService)
    }
}
