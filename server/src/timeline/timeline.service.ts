import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {TimelineEvent, TimelineEventDocument} from "./schemas/timeline.event.schema";
import {TimelineEventDto} from "./dto/timeline.event.dto";
import {TimelineTopicDto} from "./dto/timeline.topic.dto";
import {TimelineTopic, TimelineTopicDocument} from "./schemas/timelineTopicSchema";

@Injectable()
export class TimelineService {
  constructor(
    @InjectModel(TimelineEvent.name) private readonly eventModel: Model<TimelineEventDocument>,
    @InjectModel(TimelineTopic.name) private readonly topicModel: Model<TimelineTopicDocument>,
  ) {
  }

  async getEvents() {
    return await this.eventModel.find({}).sort({date: -1})
  }

  async createEvent(eventDto: TimelineEventDto) {
    return await this.eventModel.create(eventDto)
  }

  async deleteEvent(eventId: string) {
    await this.eventModel.findByIdAndDelete(eventId)
  }

  async getTopics() {
   return await this.topicModel.find({})
  }

  async createTopic(topicDto: TimelineTopicDto) {
    return await this.topicModel.create(topicDto)
  }

  async deleteTopic(categoryId: string) {
    await this.topicModel.findByIdAndDelete(categoryId)
  }
}
