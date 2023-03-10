import {BaseService} from "../../../common/base/service/base.service";
import {TimelineItemModel} from "../entities/timelineItem.model";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class TimelineItemsService extends BaseService<TimelineItemModel> {
    constructor(@InjectRepository(TimelineItemModel) protected readonly timelineItemsRepository: Repository<TimelineItemModel>) {
        super(timelineItemsRepository);
    }
}