import {Picture} from "./Picture";
import {ApiModel} from "./ApiModel";
import {API} from "./API";
import {Column} from "../decorators/Column";


export class Project extends ApiModel {
    api = new API("/portfolio/projects")

    @Column()
    title!: string

    @Column()
    slug!: string

    @Column()
    color!: string

    @Column()
    description!: string

    @Column({type: [Picture]})
    pictures: Picture[] = []

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

    // @Column()
    // topics
    //
    // @Column()
    // techs
}
