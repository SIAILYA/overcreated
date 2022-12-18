import {BaseCRUDController} from "./baseCRUD.controller";
import {OrderableModel} from "../orderable.model";
import {Body, Post, UseGuards} from "@nestjs/common";
import {AuthGuard} from "../../../modules/auth/auth.guard";
import {ReorderDto} from "../ReorderDto";
import {IOrderService} from "../service/IOrder.service";

export class OrderableController<M extends OrderableModel> extends BaseCRUDController<M> {
    constructor(private readonly IOrderService: IOrderService<M>) {
        super(IOrderService);
    }

    @UseGuards(AuthGuard)
    @Post('/reorder')
    async reorder(@Body() reorderDto: ReorderDto): Promise<void> {
        await this.IOrderService.reorder(reorderDto);
    }
}
