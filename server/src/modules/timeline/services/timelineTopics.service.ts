import {BaseService} from "../../../common/base/service/base.service";
import {TimelineTopicModel} from "../entities/timelineTopic.model";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class TimelineTopicsService extends BaseService<TimelineTopicModel> {
    constructor(@InjectRepository(TimelineTopicModel) private readonly timelineTopicRepository: Repository<TimelineTopicModel>) {
        super(timelineTopicRepository);
    }
}