import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TopicDocument = Topic & Document;

@Schema()
export class Topic {
  @Prop()
  title: string;

  @Prop()
  slug: string

  @Prop()
  color: string;

  @Prop()
  isVisible: boolean;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
