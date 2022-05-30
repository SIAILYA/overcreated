import {Body, Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Topic, TopicDocument} from "./schemas/topic.schema";
import {TopicDto} from "./dto/Topic.dto";

@Injectable()
export class TopicsService {
  constructor(
    @InjectModel(Topic.name) private readonly topicModel: Model<TopicDocument>,
  ) {}

  async create(createTopicDto: TopicDto): Promise<Topic> {
    return await this.topicModel.create(createTopicDto);
  }

  async get(onlyVisible: boolean = true) {
    if (onlyVisible) {
      return await this.topicModel.find({isVisible: onlyVisible})
    }
    return await this.topicModel.find({})
  }
}
