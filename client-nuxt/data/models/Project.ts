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

    @Column()
    developTime?: number

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

    static async previewsByTopics(topics: ProjectTopic[]) {
        return (await Project.$api.getPreviewsByTopics(topics))
            .map((t: Project) => new Project().fromJSON(t))
    }

    get plain_techs() {
        return this.techs?.map(t => t.title).join(', ') || ''
    }

    get beautiful_link() {
        if (!this.link) {
            return ''
        }

        const _t = this.link.replaceAll(new RegExp('^https?://', 'g'), '').trim()
        if (_t[_t.length - 1] === '/') {
            return _t.slice(0, _t.length - 1)
        }
    }
}
