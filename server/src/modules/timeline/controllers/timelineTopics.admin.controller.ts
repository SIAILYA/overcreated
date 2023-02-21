import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";
import {Controller} from "@nestjs/common";
import {TimelineTopicModel} from "../entities/timelineTopic.model";
import {TimelineTopicsService} from "../services/timelineTopics.service";

@Controller('api/v3/admin/timeline/timelineTopics')
export class TimelineTopicsAdminController extends BaseCRUDController<TimelineTopicModel> {
    constructor(private readonly timelineTopicsService: TimelineTopicsService) {
        super(timelineTopicsService)
    }
}