import { Controller, Get, Query } from '@nestjs/common';
import {ProjectsService} from "./projects.service";

@Controller('api/projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService
  ) {}


  @Get('get')
  async get(@Query('onlyVisible') onlyVisible: string = 'true') {
    return await this.projectsService.get(onlyVisible === 'true')
  }
}
