import {ObjectType} from "@nestjs/graphql";
import {Column, Generated} from "typeorm";
import {BaseModel} from "./base.model";

@ObjectType({isAbstract: true})
export class OrderableModel extends BaseModel {
    // auto-incremented id
    @Column({type: "int", nullable: false, unique: true, name: "order"})
    @Generated("increment")
    public order!: number;
}
