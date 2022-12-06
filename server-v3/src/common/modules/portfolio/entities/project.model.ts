import {BaseModel} from "../../../base/base.model";
import {Column, Entity} from "typeorm";

@Entity()
export class ProjectModel extends BaseModel {
    @Column({type: 'varchar', length: 255, nullable: false})
    title: string

    @Column({type: 'varchar', length: 255, nullable: false})
    slug: string

    @Column({type: 'varchar', length: 7, nullable: false})
    color: string

    @Column({type: 'boolean', default: false})
    isVisible: boolean

    // @Column()
    // topics: string[]
    //
    // @Column()
    // techs: string[]

    @Column({type: 'varchar', length: 1024, nullable: false})
    description: string

    @Column({type: 'text', nullable: true})
    fullDescription: string

    // @Column()
    // pictures: string[]

    @Column({type: 'varchar', length: 4096, nullable: true})
    link: string

    @Column({type: 'varchar', length: 4096, nullable: true})
    github: string

    @Column({type: 'varchar', length: 4096, nullable: true})
    behance: string

    @Column({type: 'integer', nullable: true})
    developTime: number
}
