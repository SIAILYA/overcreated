import {Controller} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectsService} from "../services/projects.service";
import {BaseReadController} from "../../../common/base/controller/baseRead.controller";

@Controller('api/v3/portfolio/projects')
export class ProjectsController extends BaseReadController<ProjectModel> {
    constructor(private readonly projectsService: ProjectsService) {
        super(projectsService)
    }
}
