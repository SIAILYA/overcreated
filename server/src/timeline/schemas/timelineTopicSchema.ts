import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TimelineTopicDocument = TimelineTopic & Document;

@Schema()
export class TimelineTopic {
  @Prop({required: true})
  title: string

  @Prop({})
  color: string
}

export const TimelineTopicSchema = SchemaFactory.createForClass(TimelineTopic)
