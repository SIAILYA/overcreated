import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity} from "typeorm";

@Entity({name: 'tech'})
export class TechModel extends BaseModel {
    @Column({type: 'varchar', length: 255, nullable: false})
    title!: string

    @Column({type: 'varchar', length: 255, nullable: false})
    slug!: string
}
