import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Project, ProjectDocument} from "./schemas/project.schema";

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
}
