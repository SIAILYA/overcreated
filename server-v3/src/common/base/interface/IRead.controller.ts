import {BaseModel} from "../base.model";
import {GetAllParamsDto} from "../controller/dto/getAll.params.dto";

export interface IReadController<M extends BaseModel> {
    getAll(getAllParams?: GetAllParamsDto): Promise<M[]>;

    get(id: string): Promise<M>;
}
