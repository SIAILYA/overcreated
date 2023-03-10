import {BaseCRUDController} from "./baseCRUD.controller";
import {OrderableModel} from "../orderable.model";
import {Body, Post, UseGuards} from "@nestjs/common";
import {AuthGuard} from "../../../modules/auth/auth.guard";
import {ReorderBodyDto} from "./dto/reorder.body.dto";
import {IOrderableService} from "../interface/IOrderable.service";

export class OrderableController<M extends OrderableModel> extends BaseCRUDController<M> {
    constructor(private readonly orderableService: IOrderableService<M>) {
        super(orderableService);
    }

    @UseGuards(AuthGuard)
    @Post('/reorder')
    async reorder(@Body() reorderDto: ReorderBodyDto): Promise<void> {
        await this.orderableService.reorder(reorderDto);
    }
}
