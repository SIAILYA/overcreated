import {IBaseService} from "./IBase.service";
import {ReorderDto} from "../ReorderDto";

export interface IOrderService<M> extends IBaseService<M> {
    reorder(reorderDto: ReorderDto): Promise<void>;
}
