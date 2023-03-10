import {Column, Generated} from "typeorm";
import {BaseModel} from "./base.model";

export class OrderableModel extends BaseModel {
    // auto-incremented id
    @Column({type: "int", nullable: false, name: "order"})
    @Generated("increment")
    public order!: number;
}
