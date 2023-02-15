import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Post,
    Query,
    SerializeOptions,
    UseInterceptors
} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectsService} from "../services/projects.service";
import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {GetProjectPreviewsBodyDto} from "./dto/getProjectPreviews.body.dto";
import {GetProjectBySlugQueryDto} from "./dto/getProjectBySlug.query.dto";

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

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'excludeAll',
        groups: ['preview']
    })
    @Post('/getPreviewsByTopics')
    async getPreviewsByTopics(@Body() getProjectPreviewsDto: GetProjectPreviewsBodyDto) {
        return this.projectsService.getAllVisibleByTopics(getProjectPreviewsDto.topics)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'excludeAll',
        groups: ['full']
    })
    @Get('/getBySlug')
    async getBySlug(@Query() getProjectDto: GetProjectBySlugQueryDto) {
        return this.projectsService.getProjectBySlug(getProjectDto.slug)
    }
}
