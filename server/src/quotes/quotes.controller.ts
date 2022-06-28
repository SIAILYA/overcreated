import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuoteDto } from './dto/quote.dto';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('api/quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @UseGuards(JwtAuthGuard)
  @Post("/create")
  create(@Body() quoteDto: QuoteDto) {
    return this.quotesService.create(quoteDto);
  }

  @Get("/")
  getAll() {
    return this.quotesService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.quotesService.remove(id);
  }
}
