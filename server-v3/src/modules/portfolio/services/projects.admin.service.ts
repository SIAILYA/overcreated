import {Injectable, Query} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {ProjectsService} from "./projects.service";
import {GetAllParamsDto} from "../../../common/base/controller/dto/getAll.params.dto";

@Injectable()
export class ProjectsAdminService extends ProjectsService {
    async getAll(@Query() getAllParams: GetAllParamsDto = {order: {order: 'ASC'}}): Promise<Array<ProjectModel>> {
        return this.projectModelRepository.find({where: {}, ...getAllParams});
    }

    get(id: string): Promise<ProjectModel> {
        return this.projectModelRepository.findOneBy({id: id});
    }
}
