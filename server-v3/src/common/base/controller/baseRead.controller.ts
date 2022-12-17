import {BaseModel} from "../base.model";
import {IReadController} from "./IRead.controller";
import {ClassSerializerInterceptor, Get, Param, SerializeOptions, UseInterceptors} from "@nestjs/common";
import {IBaseService} from "../service/IBase.service";


export class BaseReadController<M extends BaseModel> implements IReadController<M> {
    constructor(private readonly IBaseService: IBaseService<M>) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'exposeAll',
        excludePrefixes: ['_'],
    })
    @Get('/getAll')
    async getAll(): Promise<M[]> {
        return this.IBaseService.getAll()
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'exposeAll',
        excludePrefixes: ['_'],
    })
    @Get('/getById/:id')
    async get(@Param('id') id: string): Promise<M> {
        return await this.IBaseService.get(id)
    }
}
