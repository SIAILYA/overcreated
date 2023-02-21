import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TimelineItemModel} from "./entities/timelineItem.model";
import {TimelineTopicModel} from "./entities/timelineTopic.model";
import {TimelineItemsService} from "./services/timelineItems.service";
import {TimelineItemsAdminController} from "./controllers/timelineItems.admin.controller";
import {TimelineItemsController} from "./controllers/timelineItems.controller";
import {TimelineTopicsService} from "./services/timelineTopics.service";
import {TimelineTopicsController} from "./controllers/timelineTopics.controller";
import {TimelineTopicsAdminController} from "./controllers/timelineTopics.admin.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([TimelineItemModel, TimelineTopicModel]),
    ],
    exports: [TypeOrmModule],
    providers: [TimelineItemsService, TimelineTopicsService],
    controllers: [
        TimelineItemsController, TimelineItemsAdminController,
        TimelineTopicsController, TimelineTopicsAdminController
    ]
})
export class TimelineModule {
}
