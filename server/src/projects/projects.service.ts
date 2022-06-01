import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Project, ProjectDocument} from "./schemas/project.schema";
import {ProjectDto} from "./dto/project.dto";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<ProjectDocument>,
  ) {}

  async get(id: string = null, onlyVisible: boolean) {
    const getAllProjection = {fullDescription: 0, __v: 0}

    if (id) {
      return await this.projectModel.findById(id)
    }

    if (onlyVisible) {
      return  await this.projectModel.find({isVisible: true}, getAllProjection)
    }

    return await this.projectModel.find({}, getAllProjection)
  }

  async create(projectDto: ProjectDto) {
    return await this.projectModel.create(projectDto)
  }

  async delete(projectId: string) {
    return await this.projectModel.findByIdAndDelete(projectId)
  }

  async update(projectId: string, projectDto: ProjectDto) {
    return await this.projectModel.findByIdAndUpdate(projectId, projectDto, {returnDocument: 'after'})
  }
}
