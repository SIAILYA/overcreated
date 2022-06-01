import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model, Types} from 'mongoose';
import {Project, ProjectDocument} from "./schemas/project.schema";
import {ProjectDto} from "./dto/project.dto";

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<ProjectDocument>,
  ) {
  }

  async get(id: string = null, onlyVisible: boolean, filter: string[], populate: boolean) {
    const getAllProjection = {fullDescription: 0, __v: 0}
    const topicsFilter = {topics: {$elemMatch: {$in: filter.map(tid => new Types.ObjectId(tid))}}}

    if (id) {
      // @ts-ignore
      return await this.projectModel.findById(id).populate(populate ? "topics" : "")
    }

    if (onlyVisible) {
      // @ts-ignore
      return await this.projectModel.find({...topicsFilter, isVisible: true}, getAllProjection).populate(populate ? "topics" : "")
    }

    // @ts-ignore
    return await this.projectModel.find({topicsFilter}, getAllProjection).populate(populate ? "topics" : "")
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
