import {Body, Controller, Delete, Param, Post} from '@nestjs/common';
import {TimelineService} from "./timeline.service";
import {TimelineEventDto} from "./dto/timeline.event.dto";
import {TimelineCategoryDto} from "./dto/timeline.category.dto";

@Controller('api/timeline')
export class TimelineController {
  constructor(
    private readonly timelineService: TimelineService
  ) {
  }

  @Post('event/create')
  async createEvent(@Body() createTimelineEventDto: TimelineEventDto) {
    return await this.timelineService.createEvent(createTimelineEventDto)
  }

  @Delete('event/delete/:id')
  async deleteEvent(@Param('id') eventId: string) {
    return await this.timelineService.deleteEvent(eventId)
  }

  @Post('category/create')
  async createCategory(@Body() createTimelineCategoryDto: TimelineCategoryDto) {
    return await this.timelineService.createCategory(createTimelineCategoryDto)
  }

  @Delete('category/delete/:id')
  async deleteCategory(@Param('id') categoryId: string) {
    return await this.timelineService.deleteCategory(categoryId)
  }
}
