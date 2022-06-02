import {Module} from '@nestjs/common';
import {TimelineController} from './timeline.controller';
import {TimelineService} from './timeline.service';
import {MongooseModule} from '@nestjs/mongoose';
import {TimelineTopic, TimelineTopicSchema} from "./schemas/timelineTopicSchema";
import {TimelineEvent, TimelineEventSchema} from "./schemas/timeline.event.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: TimelineTopic.name, schema: TimelineTopicSchema}]),
    MongooseModule.forFeature([{name: TimelineEvent.name, schema: TimelineEventSchema}])
  ],
  controllers: [TimelineController],
  providers: [TimelineService]
})
export class TimelineModule {
}
