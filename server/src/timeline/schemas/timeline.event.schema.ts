import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {TimelineTopic} from "./timelineTopicSchema";

export type TimelineEventDocument = TimelineEvent & Document;

@Schema()
export class TimelineEvent {
  @Prop({required: true})
  title: string

  @Prop({required: true})
  description: string

  @Prop()
  date: Date

  @Prop()
  dateString: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'TimelineCategory'})
  topic: TimelineTopic
}

export const TimelineEventSchema = SchemaFactory.createForClass(TimelineEvent)
