import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type QuoteDocument = Quote & Document

@Schema()
export class Quote {
  @Prop({required: true})
  quote: string

  @Prop()
  author: string
}

export const QuoteSchema = SchemaFactory.createForClass(Quote)
