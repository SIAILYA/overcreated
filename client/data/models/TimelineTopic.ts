import {FetchModel} from "~/data/models/api/FetchModel";
import {ClientAPI} from "~/data/models/api/ClientAPI";
import {Column} from "~/data/decorators/Column";
import {Entity} from "~/data/decorators/Entity";

@Entity()
export class TimelineTopic extends FetchModel {
    api = new ClientAPI('/timeline/timelineTopics')

    @Column()
    title!: string

    @Column()
    color!: string

    @Column({excludeFromJSON: true, defaultValue: true})
    selected: boolean = true
}