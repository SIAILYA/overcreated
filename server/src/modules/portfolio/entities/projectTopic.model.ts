import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity} from "typeorm";
import {Expose} from "class-transformer";

@Entity({name: 'project_topics'})
export class ProjectTopicModel extends BaseModel {
    @Expose({groups: ['preview', 'client']})
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Expose({groups: ['client']})
    @Column({type: 'varchar', length: 255, nullable: false})
    slug!: string

    @Expose({groups: ['preview', 'client']})
    @Column({type: 'varchar', length: 7, nullable: false})
    color!: string

    @Column({type: 'boolean', default: false})
    isVisible: boolean
}
