import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity, OneToMany} from "typeorm";
import {TimelineItemModel} from "./timelineItem.model";

@Entity({name: 'timeline_topics'})
export class TimelineTopicModel extends BaseModel {
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Column({type: 'varchar', length: 255, nullable: false})
    slug!: string

    @Column({type: 'varchar', length: 7, nullable: false})
    color!: string

    @OneToMany(() => TimelineItemModel, (timelineItem) => timelineItem.topic)
    timelineItems: TimelineItemModel[]
}