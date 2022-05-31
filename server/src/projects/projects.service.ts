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

  async get(onlyVisible: boolean) {
    if (onlyVisible) {
      return await this.projectModel.find({isVisible: true})
    }

    return await this.projectModel.find({})
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
