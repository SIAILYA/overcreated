import "reflect-metadata";
import {FetchModel} from "~/data/models/api/FetchModel";
import {Column} from "~/data/decorators/Column";
import {Entity} from "~/data/decorators/Entity";
import {ProjectTopic} from "~/data/models/ProjectTopic";
import {Tech} from "~/data/models/Tech";
import {ProjectsAPI} from "~/data/models/api/ProjectsAPI";

@Entity()
export class Project extends FetchModel {
    api = new ProjectsAPI('/portfolio/projects')
    static $api: ProjectsAPI

    @Column()
    title!: string

    @Column()
    slug!: string

    @Column()
    color!: string

    @Column()
    description!: string

    @Column({type: [ProjectTopic]})
    topics?: ProjectTopic[]

    @Column({type: [Tech]})
    techs?: Tech[]

    @Column()
    fullDescription?: string

    @Column()
    link?: string

    @Column()
    github?: string

    static async previews() {
        return (await Project.$api.getPreviews())
            .map((t: Project) => new Project().fromJSON(t))
    }
}
