import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProjectModel} from "../entities/project.model";
import {PictureModel} from "../../common/pictures/picture.model";
import {ProjectsService} from "../services/projects.service";
import {ProjectsController} from "../controllers/projects.controller";
import {ProjectsAdminController} from "../controllers/projects.admin.controller";
import {ProjectTopicModel} from "../entities/projectTopic.model";
import {ProjectTopicsController} from "../controllers/projectTopics.controller";
import {ProjectTopicsAdminController} from "../controllers/projectTopics.admin.controller";
import {ProjectTopicsService} from "../services/projectTopics.service";
import {TechModel} from "../entities/tech.model";
import {TechsController} from "../controllers/techs.controller";
import {TechsService} from "../services/techs.service";
import {TechsAdminController} from "../controllers/techs.admin.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProjectModel, PictureModel, ProjectTopicModel, TechModel]),
    ],
    exports: [TypeOrmModule],
    providers: [
        ProjectsService,
        ProjectTopicsService,
        TechsService
    ],
    controllers: [
        ProjectsController, ProjectsAdminController,
        ProjectTopicsController, ProjectTopicsAdminController,
        TechsController, TechsAdminController
    ]
})
export class ProjectsModule {
}
