import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {TimelineCategory} from "./timeline.category.schema";

export type TimelineEventDocument = TimelineEvent & Document;

@Schema()
export class TimelineEvent {
  @Prop({required: true})
  title: string

  @Prop({required: true})
  description: string

  @Prop()
  date: Date

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'TimelineCategory'})
  topics: TimelineCategory
}

export const TimelineEventSchema = SchemaFactory.createForClass(TimelineEvent)
