import {Controller} from "@nestjs/common";
import {BaseCRUDController} from "../../../base/controller/baseCRUD.controller";
import {ProjectModel} from "../entities/project.model";
import {ProjectsService} from "../services/projects.service";

@Controller('portfolio/projects')
export class ProjectsController extends BaseCRUDController<ProjectModel> {
    constructor(private readonly projectsService: ProjectsService) {
        super(projectsService)
    }
}
