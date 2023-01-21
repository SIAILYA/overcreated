import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType({isAbstract: true})
export class BaseModel {
    @Field(type => String)
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @Field(type => Date)
    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public _created_at!: Date;

    @Field(type => Date)
    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public _updated_at!: Date;
}
