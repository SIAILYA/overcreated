import {TimelineItemModel} from "../entities/timelineItem.model";
import {TimelineItemsService} from "../services/timelineItems.service";
import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";
import {Controller} from "@nestjs/common";

@Controller('api/v3/admin/timeline/timelineItems')
export class TimelineItemsAdminController extends BaseCRUDController<TimelineItemModel> {
    constructor(private readonly timelineItemsService: TimelineItemsService) {
        super(timelineItemsService)
    }
}