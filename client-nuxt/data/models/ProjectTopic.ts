import "reflect-metadata";
import {FetchModel} from "~/data/models/api/FetchModel";
import {ClientAPI} from "~/data/models/api/ClientAPI";
import {Column} from "~/data/decorators/Column";
import {Entity} from "~/data/decorators/Entity";

@Entity()
export class ProjectTopic extends FetchModel {
    api = new ClientAPI('/portfolio/projectTopics')

    @Column()
    title!: string

    @Column()
    color!: string

    @Column()
    selected: boolean = false

    static async all() {
        return (await ProjectTopic.$api.all())
            .map((t: ProjectTopic) => new ProjectTopic().fromJSON(t))
    }
}
