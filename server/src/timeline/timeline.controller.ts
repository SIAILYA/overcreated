import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TimelineService} from "./timeline.service";
import {TimelineEventDto} from "./dto/timeline.event.dto";
import {TimelineTopicDto} from "./dto/timeline.topic.dto";

@Controller('api/timeline')
export class TimelineController {
  constructor(
    private readonly timelineService: TimelineService
  ) {
  }

  @Get('event/get')
  async getEvents() {
    return await this.timelineService.getEvents()
  }

  @Post('event/create')
  async createEvent(@Body() createTimelineEventDto: TimelineEventDto) {
    return await this.timelineService.createEvent(createTimelineEventDto)
  }

  @Delete('event/delete/:id')
  async deleteEvent(@Param('id') eventId: string) {
    return await this.timelineService.deleteEvent(eventId)
  }

  @Get('topic/get')
  async getTopics() {
    return await this.timelineService.getTopics()
  }

  @Post('topic/create')
  async createTopic(@Body() createTimelineTopicDto: TimelineTopicDto) {
    return await this.timelineService.createTopic(createTimelineTopicDto)
  }

  @Delete('topic/delete/:id')
  async deleteTopic(@Param('id') categoryId: string) {
    return await this.timelineService.deleteTopic(categoryId)
  }
}
