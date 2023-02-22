import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity, OneToMany} from "typeorm";
import {TimelineItemModel} from "./timelineItem.model";
import {Expose} from "class-transformer";

@Entity({name: 'timeline_topics'})
export class TimelineTopicModel extends BaseModel {
    @Expose({groups: ['preview']})
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Expose({groups: ['preview']})
    @Column({type: 'varchar', length: 7, nullable: false})
    color!: string

    @OneToMany(() => TimelineItemModel, (timelineItem) => timelineItem.topic)
    timelineItems: TimelineItemModel[]
}