import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {ProjectDto} from './dto/project.dto';
import {ProjectsService} from "./projects.service";

@Controller('api/projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService
  ) {
  }


  @Get('get/:id?')
  async get(@Param('id') id: string = null, @Query('onlyVisible') onlyVisible: string = 'true') {
    return await this.projectsService.get(id, onlyVisible === 'true')
  }

  @Post('create')
  async create(@Body() createProjectDto: ProjectDto) {
    return await this.projectsService.create(createProjectDto)
  }

  @Delete('delete/:id')
  async delete(@Param('id') topicId: string) {
    await this.projectsService.delete(topicId)
  }

  @Patch('update/:id')
  async update(@Param('id') topicId: string, @Body() projectDto: ProjectDto) {
    return await this.projectsService.update(topicId, projectDto)
  }
}
