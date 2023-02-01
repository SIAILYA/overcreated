import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {PictureModel} from "../../common/pictures/picture.model";
import {Field, ObjectType} from "@nestjs/graphql";
import {ProjectTopicModel} from "./projectTopic.model";
import {TechModel} from "./tech.model";
import {OrderableModel} from "../../../common/base/orderable.model";
import {Expose} from "class-transformer";

@ObjectType({description: 'Project'})
@Entity({name: 'projects'})
export class ProjectModel extends OrderableModel {
    @Expose({groups: ['preview']})
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Expose({groups: ['preview']})
    @Column({type: 'varchar', length: 255, nullable: false})
    slug!: string

    @Expose({groups: ['preview']})
    @Column({type: 'varchar', length: 7, nullable: false})
    color!: string

    @Column({type: 'boolean', default: false})
    isVisible: boolean

    @Expose({groups: ['preview']})
    @ManyToMany(type => ProjectTopicModel, {eager: true})
    @JoinTable({
        joinColumn: {name: 'project_id'},
        inverseJoinColumn: {name: 'project_topic_id'},
        name: 'projects_to_project_topics'
    })
    topics?: ProjectTopicModel[]

    @Expose({groups: ['preview']})
    @ManyToMany(type => TechModel, {eager: true})
    @JoinTable({joinColumn: {name: 'project_id'}, inverseJoinColumn: {name: 'tech_id'}, name: 'projects_to_techs'})
    techs: TechModel[]

    @Expose({groups: ['preview']})
    @Column({type: 'varchar', length: 1024, nullable: false})
    description!: string

    @Column({type: 'text', nullable: true})
    fullDescription?: string

    @ManyToMany(() => PictureModel, {onDelete: "CASCADE", eager: true})
    @JoinTable({
        joinColumn: {name: 'project_id'},
        inverseJoinColumn: {name: 'picture_id'},
        name: 'projects_to_pictures'
    })
    pictures?: PictureModel[]

    @Expose({groups: ['preview']})
    @Column({type: 'varchar', length: 4096, nullable: true})
    link?: string

    @Column({type: 'varchar', length: 4096, nullable: true})
    github?: string

    @Column({type: 'varchar', length: 4096, nullable: true})
    behance?: string

    @Expose({groups: ['preview']})
    @Column({type: 'integer', nullable: true})
    developTime?: number
}
