import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity} from "typeorm";
import {Field, ObjectType} from "@nestjs/graphql";
import {Expose} from "class-transformer";

@ObjectType({description: 'Picture'})
@Entity({name: 'pictures'})
export class PictureModel extends BaseModel {
    @Expose({groups: ['full']})
    @Field()
    @Column({type: 'varchar', length: 1024, nullable: false})
    path!: string

    @Expose({groups: ['full']})
    @Field({nullable: true})
    @Column({type: 'text', nullable: true})
    caption?: string
}
