import {InjectRepository} from "@nestjs/typeorm";
import {FindOneOptions, Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {ProjectModel} from "../entities/project.model";
import {OrderableService} from "../../../common/base/service/orderable.service";
import {ProjectTopicModel} from "../entities/projectTopic.model";

@Injectable()
export class ProjectsService extends OrderableService<ProjectModel> {
    constructor(@InjectRepository(ProjectModel) protected readonly projectModelRepository: Repository<ProjectModel>) {
        super(projectModelRepository);
    }

    async getAllVisibleByTopics(topics: ProjectTopicModel[]): Promise<ProjectModel[]> {
        const queryBuilder = this.projectModelRepository.createQueryBuilder('project');

        if (topics.length === 0) {
            return []
        }

        queryBuilder
            .leftJoin('project.topics', 'projectTopic')
            .where('projectTopic.id IN (:...topicIds)', {topicIds: topics.map(topic => topic.id)})
            .leftJoinAndSelect('project.topics', 'topics')
            .leftJoinAndSelect('project.techs', 'techs')
            .orderBy('project.order', 'ASC')
            .addOrderBy('techs.id', 'ASC')
            .addOrderBy('topics.id', 'ASC')

        return await queryBuilder.getMany()
    }

    async getProjectBySlug(slug: string): Promise<ProjectModel> {
        return await this.projectModelRepository
            .findOne(
                {
                    where: {
                        slug,
                        isVisible: true
                    }
                } as FindOneOptions<ProjectModel>)
    }
}
