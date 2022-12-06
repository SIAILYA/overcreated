import {Body, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {BaseModel} from "../base.model";
import {IBaseService} from "../service/IBase.service";
import {IReadController} from "./IRead.controller";
import {IWriteController} from "./IWrite.controller";

export class BaseCRUDController<M extends BaseModel> implements IReadController<M>, IWriteController<M> {
    constructor(private readonly IBaseService: IBaseService<M>) {}

    @Get('/getAll')
    async getAll(): Promise<M[]> {
        return this.IBaseService.getAll()
    }

    @Get('/getById/:id')
    async get(@Param('id') id: string): Promise<M> {
        return this.IBaseService.get(id)
    }

    @Post('/create')
    async create(@Body() entity: M): Promise<M> {
        return this.IBaseService.create(entity);
    }

    @Put('/update')
    async update(@Body() entity: M): Promise<M> {
        return this.IBaseService.update(entity);
    }

    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        this.IBaseService.delete(id);
    }
}
