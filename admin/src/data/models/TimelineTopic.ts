import {Entity} from "@data/decorators/Entity";
import {ApiModel} from "@data/models/ApiModel";
import {IClearable} from "@data/models/IClearable";
import {Column} from "@data/decorators/Column";
import {API} from "@data/models/API";

@Entity()
export class TimelineTopic extends ApiModel implements IClearable {
    api = new API("/timeline/timelineTopics")

    @Column()
    title!: string

    @Column()
    color!: string

    clear(): void {
        this.title = ""
        this.color = ""
    }
}