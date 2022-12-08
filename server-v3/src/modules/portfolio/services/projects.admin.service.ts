import {Injectable} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectsService} from "./projects.service";

@Injectable()
export class ProjectsAdminService extends ProjectsService {
    getAll(): Promise<Array<ProjectModel>> {
        return this.projectModelRepository.find();
    }

    get(id: string): Promise<ProjectModel> {
        return this.projectModelRepository.findOneBy({id: id});
    }
}
