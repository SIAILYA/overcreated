import {TopicsService} from "./topics.service";
import {TopicsController} from "./topics.controller";
import { MongooseModule } from "@nestjs/mongoose";
import {Topic, TopicSchema} from "./schemas/topic.schema";
import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }])],
  controllers: [TopicsController],
  providers: [TopicsService, JwtService],
})
export class TopicsModule {}
