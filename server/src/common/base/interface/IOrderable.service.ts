import {IBaseService} from "./IBase.service";
import {ReorderBodyDto} from "../controller/dto/reorder.body.dto";

export interface IOrderableService<M> extends IBaseService<M> {
    reorder(reorderDto: ReorderBodyDto): Promise<void>;

}
