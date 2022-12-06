import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class PictureInput {
    @Field() url!: string
    @Field({nullable: true}) caption?: string
}
