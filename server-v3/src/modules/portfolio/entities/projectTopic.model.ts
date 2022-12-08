import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity} from "typeorm";

@Entity({name: 'project_topics'})
export class ProjectTopicModel extends BaseModel {
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Column({type: 'varchar', length: 255, nullable: false})
    slug!: string

    @Column({type: 'varchar', length: 7, nullable: false})
    color!: string

    @Column({type: 'boolean', default: false})
    isVisible: boolean
}
