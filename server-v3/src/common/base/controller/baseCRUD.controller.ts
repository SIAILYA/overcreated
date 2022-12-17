import {Body, Delete, Get, Param, Post, Put, UseGuards} from "@nestjs/common";
import {BaseModel} from "../base.model";
import {IBaseService} from "../service/IBase.service";
import {IReadController} from "./IRead.controller";
import {IWriteController} from "./IWrite.controller";
import {AuthGuard} from "../../../modules/auth/auth.guard";

export class BaseCRUDController<M extends BaseModel> implements IReadController<M>, IWriteController<M> {
    constructor(private readonly IBaseService: IBaseService<M>) {}

    @UseGuards(AuthGuard)
    @Get('/getAll')
    async getAll(): Promise<M[]> {
        return this.IBaseService.getAll()
    }

    @UseGuards(AuthGuard)
    @Get('/getById/:id')
    async get(@Param('id') id: string): Promise<M> {
        return this.IBaseService.get(id)
    }

    @UseGuards(AuthGuard)
    @Post('/create')
    async create(@Body() entity: M): Promise<M> {
        return this.IBaseService.create(entity);
    }

    @UseGuards(AuthGuard)
    @Put('/update')
    async update(@Body() entity: M): Promise<M> {
        return this.IBaseService.update(entity);
    }

    @UseGuards(AuthGuard)
    @Delete('/delete/:id')
    async delete(@Param('id') id: string) {
        this.IBaseService.delete(id);
    }
}
