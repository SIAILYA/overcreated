import {Field, InputType} from "@nestjs/graphql";
import {PictureModel} from "../../../common/pictures/picture.model";
import {PictureInput} from "../../../common/pictures/picture.input";

@InputType()
export class ProjectInput {
    @Field() title!: string
    @Field() slug!: string
    @Field() color!: string
    @Field() isVisible: boolean
    @Field() description!: string
    @Field({nullable: true}) fullDescription?: string
    @Field(type => [PictureInput], {nullable: true}) pictures?: PictureModel[]
    @Field({nullable: true}) link?: string
    @Field({nullable: true}) github?: string
    @Field({nullable: true}) behance?: string
    @Field({nullable: true}) developTime?: number
}
