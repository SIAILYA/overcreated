import {BadGatewayException} from "@nestjs/common";

export interface IBaseService<M> {
    getAll(): Promise<M[]>;
    get(id: string): Promise<M>;
    update(entity: M): Promise<M>;
    create(entity: M): Promise<M>;
    delete(id: string): Promise<void> | BadGatewayException;
}
