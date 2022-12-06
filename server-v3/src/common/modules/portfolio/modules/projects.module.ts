import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProjectModel} from "../entities/project.model";

@Module({
    imports: [TypeOrmModule.forFeature([ProjectModel])],
    exports: [TypeOrmModule]
})
export class ProjectsModule {
}
