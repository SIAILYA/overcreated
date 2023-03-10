import {ApiModel} from "@data/models/common/ApiModel";
import {API} from "@data/models/common/API";
import {Entity} from "@data/decorators/Entity";
import {TimelineTopic} from "@data/models/TimelineTopic";
import {Column} from "@data/decorators/Column";
import {IClearable} from "@data/models/common/IClearable";

@Entity()
export class TimelineItem extends ApiModel implements IClearable {
    api = new API('/timeline/timelineItems')

    @Column()
    title!: string

    @Column({type: Date})
    date!: Date

    @Column()
    readable_date!: string

    @Column()
    addition_description?: string

    @Column()
    description?: string

    @Column({type: TimelineTopic})
    topic!: TimelineTopic

    validate() {
        return this.title && this.topic && this.readable_date && this.date
    }

    clear() {
        this.title = ""
        this.description = ""
        this.addition_description = ""
        this.readable_date = ""
        this.date = new Date()
        this.topic = new TimelineTopic()
    }
}