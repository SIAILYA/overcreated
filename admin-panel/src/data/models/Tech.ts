import {ApiModel} from "./ApiModel";
import {Column} from "../decorators/Column";
import {Entity} from "../decorators/Entity";


@Entity
export class Tech extends ApiModel {
    api = {path: "/portfolio/techs"}

    @Column()
    title!: string

    @Column()
    slug!: string
}
