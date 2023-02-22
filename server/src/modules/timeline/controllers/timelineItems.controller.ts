import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {TimelineItemModel} from "../entities/timelineItem.model";
import {TimelineItemsService} from "../services/timelineItems.service";
import {Body, ClassSerializerInterceptor, Controller, Post, SerializeOptions, UseInterceptors} from "@nestjs/common";
import {GetAllParamsDto} from "../../../common/base/controller/dto/getAll.params.dto";

@Controller('api/v3/timeline/timelineItems')
export class TimelineItemsController extends BaseReadController<TimelineItemModel> {
    constructor(private readonly timelineItemsService: TimelineItemsService) {
        super(timelineItemsService)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'exposeAll',
        excludePrefixes: ['_'],
        groups: ['preview']
    })
    @Post('/getAll')
    async getAll(@Body() getAllParams?: GetAllParamsDto): Promise<TimelineItemModel[]> {
        return this.timelineItemsService.getAllVisible({order: {date: 'DESC'}, ...getAllParams})
    }
}