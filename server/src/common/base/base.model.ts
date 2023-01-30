import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Field, ObjectType} from "@nestjs/graphql";
import {Expose} from "class-transformer";

@ObjectType({isAbstract: true})
export class BaseModel {
    @Expose({groups: ['client', 'preview']})
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public _created_at!: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public _updated_at!: Date;
}
