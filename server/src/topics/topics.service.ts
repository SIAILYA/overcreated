import {Injectable} from "@nestjs/common";

import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Topic, TopicDocument} from "./schemas/topic.schema";
import {TopicDto} from "./dto/topic.dto";

@Injectable()
export class TopicsService {
  constructor(
    @InjectModel(Topic.name) private readonly topicModel: Model<TopicDocument>,
  ) {
  }

  async create(createTopicDto: TopicDto): Promise<Topic> {
    return await this.topicModel.create(createTopicDto);
  }

  async get(id: string = null, onlyVisible: boolean = true) {
    if (id) {
      return await this.topicModel.findById(id)
    }

    if (onlyVisible) {
      return await this.topicModel.find({isVisible: onlyVisible})
    }
    return await this.topicModel.find({})
  }

  async delete(topicId: string) {
    await this.topicModel.findByIdAndDelete(topicId)
  }

  async update(topicId: string, updateTopicDto: TopicDto) {
    await this.topicModel.findByIdAndUpdate(topicId, updateTopicDto)
  }
}
