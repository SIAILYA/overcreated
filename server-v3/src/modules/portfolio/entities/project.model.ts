import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {PictureModel} from "../../common/pictures/picture.model";
import {Field, ObjectType} from "@nestjs/graphql";
import {BaseModel} from "../../../common/base/base.model";
import {ProjectTopicModel} from "./projectTopic.model";
import {TechModel} from "./tech.model";

@ObjectType({description: 'Project'})
@Entity({name: 'projects'})
export class ProjectModel extends BaseModel {
    @Field(type => String)
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Field()
    @Column({type: 'varchar', length: 255, nullable: false})
    slug!: string

    @Field()
    @Column({type: 'varchar', length: 7, nullable: false})
    color!: string

    @Field()
    @Column({type: 'boolean', default: false})
    isVisible: boolean

    // @Field(type => [ProjectTopicModel])
    @ManyToMany(type => ProjectTopicModel)
    @JoinTable({joinColumn: {name: 'project_id'}, inverseJoinColumn: {name: 'project_topic_id'}, name: 'projects_to_project_topics'})
    topics?: ProjectTopicModel[]

    @ManyToMany(type => TechModel, {eager: true})
    @JoinTable({joinColumn: {name: 'project_id'}, inverseJoinColumn: {name: 'tech_id'}})
    techs: TechModel[]

    @Field()
    @Column({type: 'varchar', length: 1024, nullable: false})
    description!: string

    @Field({nullable: true})
    @Column({type: 'text', nullable: true})
    fullDescription?: string

    @Field(type => [PictureModel], {nullable: true})
    @ManyToMany(() => PictureModel, {onDelete: "NO ACTION", eager: true})
    @JoinTable({joinColumn: {name: 'project_id'}, inverseJoinColumn: {name: 'picture_id'}, name: 'projects_to_pictures'})
    pictures?: PictureModel[]

    @Field({nullable: true})
    @Column({type: 'varchar', length: 4096, nullable: true})
    link?: string

    @Field({nullable: true})
    @Column({type: 'varchar', length: 4096, nullable: true})
    github?: string

    @Field({nullable: true})
    @Column({type: 'varchar', length: 4096, nullable: true})
    behance?: string

    @Field({nullable: true})
    @Column({type: 'integer', nullable: true})
    developTime?: number
}
