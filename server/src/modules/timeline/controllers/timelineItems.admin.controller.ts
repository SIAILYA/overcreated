import {TimelineItemModel} from "../entities/timelineItem.model";
import {TimelineItemsService} from "../services/timelineItems.service";
import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";
import {Body, Controller, Post, UseGuards} from "@nestjs/common";
import {AuthGuard} from "../../auth/auth.guard";
import {GetAllParamsDto} from "../../../common/base/controller/dto/getAll.params.dto";

@Controller('api/v3/admin/timeline/timelineItems')
export class TimelineItemsAdminController extends BaseCRUDController<TimelineItemModel> {
    constructor(private readonly timelineItemsService: TimelineItemsService) {
        super(timelineItemsService)
    }

    @UseGuards(AuthGuard)
    @Post('/getAll')
    async getAll(@Body() getAllParams?: GetAllParamsDto): Promise<TimelineItemModel[]> {
        return this.timelineItemsService.getAll({order: {date: 'DESC'}, ...getAllParams})
    }
}