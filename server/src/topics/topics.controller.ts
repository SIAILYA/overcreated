import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import {TopicsService} from './topics.service';
import {TopicDto} from "./dto/Topic.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('api/topics')
export class TopicsController {
  constructor(
    private readonly topicsService: TopicsService
  ) {
  }

  @Get('get')
  async get(@Query('onlyVisible') onlyVisible: string = 'true') {
    return await this.topicsService.get(onlyVisible === 'true')
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createTopicDto: TopicDto) {
    return  await this.topicsService.create(createTopicDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async delete(@Param('id') topicId: string) {
    await this.topicsService.delete(topicId)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  async update(@Param('id') topicId: string, @Body() updateTopicDto: TopicDto) {
    await this.topicsService.update(topicId, updateTopicDto)
  }
}
