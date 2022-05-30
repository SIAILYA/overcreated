import {Body, Controller, Delete, Get, Post, Query} from '@nestjs/common';
import {TopicsService} from './topics.service';
import {TopicDto} from "./dto/Topic.dto";

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

  @Post('create')
  async create(@Body() createTopicDto: TopicDto) {
    await this.topicsService.create(createTopicDto);
  }

  @Delete('delete/:id')
  async delete() {

  }
}
