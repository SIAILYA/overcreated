import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Topic } from 'src/topics/schemas/topic.schema';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop({required: true})
  title: string;

  @Prop({required: true})
  slug: string

  @Prop({required: true})
  color: string;

  @Prop({default: false})
  isVisible: boolean;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}]})
  topics: Topic[]

  /**
   * @property techs: string[] - Список технологий в проекте - массив строк
   **/
  @Prop()
  techs: string[]

  @Prop({required: true})
  description: string

  @Prop()
  fullDescription: string

  @Prop()
  photos: string[]

  @Prop()
  github: string

  @Prop()
  behance: string

  @Prop()
  developTime: number
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
