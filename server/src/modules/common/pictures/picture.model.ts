import {BaseModel} from "../../../common/base/base.model";
import {Column, Entity} from "typeorm";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType({description: 'Picture'})
@Entity({name: 'pictures'})
export class PictureModel extends BaseModel {
    // FIXME: Изменить модель, поле url переименовать в path,
    //  в геррере url (клиент) делать проверку на наличие http и если его нет,
    //  то добавлять к нему адрес сервера из конфига
    @Field()
    @Column({type: 'varchar', length: 1024, nullable: false})
    path!: string

    @Field({nullable: true})
    @Column({type: 'text', nullable: true})
    caption?: string
}
