import {CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Expose} from "class-transformer";

export class BaseModel {
    @Expose({groups: ['full', 'preview']})
    @PrimaryGeneratedColumn("uuid")
    public id!: string;

    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    public _created_at!: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    public _updated_at!: Date;
}
