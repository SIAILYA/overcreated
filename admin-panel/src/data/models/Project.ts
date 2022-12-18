import {Picture} from "./Picture";
import {ApiModel} from "./ApiModel";
import {API} from "./API";
import {Column} from "../decorators/Column";


export class Project extends ApiModel {
    api = new API("/portfolio/projects")

    @Column()
    name!: string

    @Column({type: String})
    description!: string

    @Column({type: [Picture]})
    pictures: Picture[] = []
}
