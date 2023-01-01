import {BaseModel} from "../base.model";
import {IReadController} from "../interface/IRead.controller";
import {Body, ClassSerializerInterceptor, Get, Param, Post, SerializeOptions, UseInterceptors} from "@nestjs/common";
import {IBaseService} from "../interface/IBase.service";
import {GetAllParamsDto} from "./dto/getAll.params.dto";


export class BaseReadController<M extends BaseModel> implements IReadController<M> {
    constructor(private readonly IBaseService: IBaseService<M>) {
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'exposeAll',
        excludePrefixes: ['_'],
    })
    @Post('/getAll')
    async getAll(@Body() getAllParams?: GetAllParamsDto): Promise<M[]> {
        return this.IBaseService.getAllVisible(getAllParams)
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @SerializeOptions({
        strategy: 'exposeAll',
        excludePrefixes: ['_'],
    })
    @Get('/getById/:id')
    async get(@Param('id') id: string): Promise<M> {
        return await this.IBaseService.getVisible(id)
    }
}
