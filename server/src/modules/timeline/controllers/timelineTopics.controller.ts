import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {TimelineTopicModel} from "../entities/timelineTopic.model";
import {Controller} from "@nestjs/common";
import {TimelineTopicsService} from "../services/timelineTopics.service";

@Controller('api/v3/timeline/timelineTopics')
export class TimelineTopicsController extends BaseReadController<TimelineTopicModel> {
    constructor(private readonly timelineTopicsService: TimelineTopicsService) {
        super(timelineTopicsService);
    }
}