import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {TimelineItemModel} from "../entities/timelineItem.model";
import {TimelineItemsService} from "../services/timelineItems.service";
import {Controller} from "@nestjs/common";

@Controller('api/v3/timeline/timelineItems')
export class TimelineItemsController extends BaseReadController<TimelineItemModel> {
    constructor(private readonly timelineItemsService: TimelineItemsService) {
        super(timelineItemsService)
    }
}