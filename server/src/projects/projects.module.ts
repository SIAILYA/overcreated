import {Module} from '@nestjs/common';
import {ProjectsService} from './projects.service';
import {ProjectsController} from "./projects.controller";
import {MongooseModule} from '@nestjs/mongoose';
import {Project, ProjectSchema} from "./schemas/project.schema";
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{name: Project.name, schema: ProjectSchema}])],
  controllers: [ProjectsController],
  providers: [ProjectsService, JwtService]
})
export class ProjectsModule {
}
