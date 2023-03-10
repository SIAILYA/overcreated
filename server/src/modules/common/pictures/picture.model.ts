import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity} from "typeorm";
import {Field, ObjectType} from "@nestjs/graphql";
import {Expose} from "class-transformer";

@Entity({name: 'pictures'})
export class PictureModel extends BaseModel {
    @Expose({groups: ['full']})
    @Column({type: 'varchar', length: 1024, nullable: false})
    path!: string

    @Expose({groups: ['full']})
    @Column({type: 'text', nullable: true})
    caption?: string
}
