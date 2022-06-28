import {Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {QuoteDto} from './dto/quote.dto';
import {Quote, QuoteDocument} from "./schemas/quote.schema";

@Injectable()
export class QuotesService {
  constructor(
    @InjectModel(Quote.name) private readonly quoteModel: Model<QuoteDocument>
  ) {}

  create(createQuoteDto: QuoteDto) {
    return this.quoteModel.create(createQuoteDto)
  }

  getAll() {
    return this.quoteModel.find({})
  }

  async remove(id: string) {
    return await this.quoteModel.findByIdAndDelete(id)
  }
}
