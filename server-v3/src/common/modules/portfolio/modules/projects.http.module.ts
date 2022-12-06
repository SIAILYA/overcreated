import {Module} from "@nestjs/common";
import {ProjectsModule} from "./projects.module";
import {ProjectsService} from "../services/projects.service";
import {ProjectsController} from "../controllers/projects.controller";

@Module({
    imports: [ProjectsModule],
    providers: [ProjectsService],
    exports: [],
    controllers: [ProjectsController]
})
export class ProjectsHttpModule {
}
