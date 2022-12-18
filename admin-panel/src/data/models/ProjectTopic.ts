import {ApiModel} from "./ApiModel";
import {API} from "./API";
import {Column} from "../decorators/Column";

export class ProjectTopic extends ApiModel {
    api = new API("/portfolio/projectTopics")

    @Column()
    title!: string

    @Column()
    slug!: string

    @Column()
    color!: string

    @Column()
    isVisible: boolean = false
}
