import {BaseModel} from "../base.model";

export interface IWriteController<M extends BaseModel> {
    create(entity: M): Promise<M>;
    update(entity: M): Promise<M>;
    delete(id: string): Promise<void>;
}
