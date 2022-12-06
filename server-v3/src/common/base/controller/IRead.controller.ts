import {BaseModel} from "../base.model";

export interface IReadController<M extends BaseModel> {
    getAll(): Promise<M[]>;
    get(id: string): Promise<M>;
}
