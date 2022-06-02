import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TimelineCategoryDocument = TimelineCategory & Document;

@Schema()
export class TimelineCategory {
  @Prop({required: true})
  title: string

  @Prop({})
  color: string
}

export const TimelineCategorySchema = SchemaFactory.createForClass(TimelineCategory)
