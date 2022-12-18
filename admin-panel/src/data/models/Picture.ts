import {ApiModel} from "./ApiModel";
import {API} from "./API";
import {Entity} from "../decorators/Entity";
import {Column} from "../decorators/Column";

@Entity
export class Picture extends ApiModel {
    api = null as unknown as API<Picture>

    @Column()
    url!: string
}
