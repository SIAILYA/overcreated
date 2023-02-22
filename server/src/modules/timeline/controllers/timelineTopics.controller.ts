import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {TimelineTopicModel} from "../entities/timelineTopic.model";
import {Body, ClassSerializerInterceptor, Controller, Post, SerializeOptions, UseInterceptors} from "@nestjs/common";
import {TimelineTopicsService} from "../services/timelineTopics.service";
import {GetAllParamsDto} from "../../../common/base/controller/dto/getAll.params.dto";

@Controller('api/v3/timeline/timelineTopics')
export class TimelineTopicsController extends BaseReadController<TimelineTopicModel> {
    constructor(private readonly timelineTopicsService: TimelineTopicsService) {
        super(timelineTopicsService);
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'exposeAll',
        excludePrefixes: ['_'],
        groups: ['preview']
    })
    @Post('/getAll')
    async getAll(@Body() getAllParams?: GetAllParamsDto): Promise<TimelineTopicModel[]> {
        return this.timelineTopicsService.getAll(getAllParams)
    }
}