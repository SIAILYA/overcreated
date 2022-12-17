import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity} from "typeorm";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType({description: 'Picture'})
@Entity({name: 'pictures'})
export class PictureModel extends BaseModel {
    @Field()
    @Column({type: 'varchar', length: 255, nullable: false})
    url!: string

    @Field({nullable: true})
    @Column({type: 'text', nullable: true})
    caption?: string
}
