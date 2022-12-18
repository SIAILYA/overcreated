import {ApiModel} from "./ApiModel";
import {Entity} from "../decorators/Entity";
import {Column} from "../decorators/Column";

@Entity({disableApi: true})
export class Picture extends ApiModel {
    api = {}

    @Column()
    url!: string

    @Column()
    caption?: string
}
