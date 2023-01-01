import {Picture} from "./Picture";
import {Column} from "../decorators/Column";
import {Tech} from "./Tech";
import {ProjectTopic} from "./ProjectTopic";
import {Entity} from "../decorators/Entity";
import {OrderableModel} from "./OrderableModel";


@Entity()
export class Project extends OrderableModel {
    api = {path: "/portfolio/projects"}

    @Column()
    title!: string

    @Column()
    slug!: string

    @Column({type: [Picture]})
    pictures: Picture[] = []

    @Column()
    color!: string

    @Column()
    description!: string


    @Column()
    fullDescription?: string

    @Column()
    isVisible: boolean = false

    @Column()
    link?: string

    @Column()
    github?: string

    @Column()
    behance?: string

    @Column()
    developTime?: number

    @Column({type: [Tech]})
    techs: Tech[] = []

    @Column({type: [ProjectTopic]})
    topics: ProjectTopic[] = []

    hasTech(tech: Tech) {
        return this.techs.some(t => t.id === tech.id)
    }

    hasTopic(topic: ProjectTopic) {
        return this.topics.some(t => t.id === topic.id)
    }
}
