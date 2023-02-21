import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity, ManyToOne} from "typeorm";
import {TimelineTopicModel} from "./timelineTopic.model";

@Entity({name: 'timeline_items'})
export class TimelineItemModel extends BaseModel {

    @Column({type: 'timestamptz'})
    date!: Date

    @Column({type: 'varchar', length: 255, nullable: false})
    readable_date!: string

    @Column({type: 'varchar', length: 512, nullable: false})
    title!: string

    @Column({type: 'varchar', length: 4096, nullable: true})
    description: string

    @Column({type: 'varchar', length: 8192, nullable: true})
    addition_description: string

    @ManyToOne(() => TimelineTopicModel)
    topic: TimelineTopicModel
}