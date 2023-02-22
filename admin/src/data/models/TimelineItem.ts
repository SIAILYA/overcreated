import {ApiModel} from "@data/models/common/ApiModel";
import {API} from "@data/models/common/API";
import {Entity} from "@data/decorators/Entity";
import {TimelineTopic} from "@data/models/TimelineTopic";
import {Column} from "@data/decorators/Column";

@Entity()
export class TimelineItem extends ApiModel {
    api = new API('/timeline/timelineItems')


    @Column({type: Date})
    date!: Date

    @Column()
    readable_date!: string

    @Column()
    title!: string

    @Column()
    addition_description?: string

    @Column()
    description?: string

    @Column({type: TimelineTopic})
    topic!: TimelineTopic
}