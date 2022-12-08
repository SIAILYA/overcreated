import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProjectModel} from "../entities/project.model";
import {PictureModel} from "../../common/picture.model";
import {ProjectsService} from "../services/projects.service";
import {ProjectsResolver} from "../resolvers/projects.resolver";
import {ProjectsController} from "../controllers/projects.controller";
import {ProjectsAdminController} from "../controllers/projects.admin.controller";
import {ProjectTopicModel} from "../entities/projectTopic.model";
import {ProjectTopicsController} from "../controllers/projectTopics.controller";
import {ProjectsAdminService} from "../services/projects.admin.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProjectModel, PictureModel, ProjectTopicModel]),
    ],
    exports: [TypeOrmModule],
    providers: [ProjectsService, ProjectsResolver, ProjectsAdminService],
    controllers: [
        ProjectsController, ProjectsAdminController,
        ProjectTopicsController
    ]
})
export class ProjectsModule {
}
