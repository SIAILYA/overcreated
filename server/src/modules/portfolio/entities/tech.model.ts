import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity} from "typeorm";
import {Expose} from "class-transformer";

@Entity({name: 'tech'})
export class TechModel extends BaseModel {
    @Expose({groups: ['preview']})
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Column({type: 'varchar', length: 255, nullable: false})
    slug!: string
}
