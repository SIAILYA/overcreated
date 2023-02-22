import {ApiModel} from "./common/ApiModel";
import {API} from "./common/API";
import {Column} from "../decorators/Column";
import {IClearable} from "./common/IClearable";
import {Entity} from "../decorators/Entity";


@Entity()
export class ProjectTopic extends ApiModel implements IClearable {
    api = new API("/portfolio/projectTopics")

    @Column()
    title!: string

    @Column()
    slug!: string

    @Column()
    color!: string

    @Column()
    isVisible: boolean = false

    clear() {
        this.title = ""
        this.slug = ""
        this.color = ""
        this.isVisible = false
    }
}
