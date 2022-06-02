import {Module} from '@nestjs/common';
import {TimelineController} from './timeline.controller';
import {TimelineService} from './timeline.service';
import {MongooseModule} from '@nestjs/mongoose';
import {TimelineCategory, TimelineCategorySchema} from "./schemas/timeline.category.schema";
import {TimelineEvent, TimelineEventSchema} from "./schemas/timeline.event.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: TimelineCategory.name, schema: TimelineCategorySchema}]),
    MongooseModule.forFeature([{name: TimelineEvent.name, schema: TimelineEventSchema}])
  ],
  controllers: [TimelineController],
  providers: [TimelineService]
})
export class TimelineModule {
}
