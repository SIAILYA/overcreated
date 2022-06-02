import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {TimelineEvent, TimelineEventDocument} from "./schemas/timeline.event.schema";
import {TimelineEventDto} from "./dto/timeline.event.dto";
import {TimelineCategoryDto} from "./dto/timeline.category.dto";
import {TimelineCategory, TimelineCategoryDocument} from "./schemas/timeline.category.schema";

@Injectable()
export class TimelineService {
  constructor(
    @InjectModel(TimelineEvent.name) private readonly eventModel: Model<TimelineEventDocument>,
    @InjectModel(TimelineCategory.name) private readonly categoryModel: Model<TimelineCategoryDocument>,
  ) {
  }

  async createEvent(eventDto: TimelineEventDto) {
    return await this.eventModel.create(eventDto)
  }

  async deleteEvent(eventId: string) {
    await this.eventModel.findByIdAndDelete(eventId)
  }

  async createCategory(categoryDto: TimelineCategoryDto) {
    return await this.categoryModel.create(categoryDto)
  }

  async deleteCategory(categoryId: string) {
    await this.categoryModel.findByIdAndDelete(categoryId)
  }
}
