import {ProjectModel} from "../entities/project.model";
import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {ProjectsService} from "../services/projects.service";
import {ProjectInput} from "./input/project.input";

/*
* @deprecated
*/
@Resolver(of => ProjectModel)
export class ProjectsResolver {
    constructor(private readonly projectsService: ProjectsService) {
    }

    @Query(returns => ProjectModel)
    async project(@Args('id', {type: () => String}) id: string) {
        return this.projectsService.get(id);
    }

    // @Query(returns => [ProjectModel])
    // async projects() {
    //     return this.projectsService.getAll();
    // }
}