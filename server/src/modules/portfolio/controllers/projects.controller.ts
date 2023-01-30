import {Body, ClassSerializerInterceptor, Controller, Post, SerializeOptions, UseInterceptors} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectsService} from "../services/projects.service";
import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {GetProjectPreviewsBodyDto} from "./dto/getProjectPreviews.body.dto";

@Controller('api/v3/portfolio/projects')
export class ProjectsController extends BaseReadController<ProjectModel> {
    constructor(private readonly projectsService: ProjectsService) {
        super(projectsService)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'excludeAll',
        groups: ['preview']
    })
    @Post('/getPreviews')
    async getPreviews(@Body() getProjectPreviewsDto: GetProjectPreviewsBodyDto) {
        return this.projectsService.getAllVisible(getProjectPreviewsDto)
    }
}
