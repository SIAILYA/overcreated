import {BadGatewayException} from "@nestjs/common";
import {GetAllParamsDto} from "../controller/dto/getAll.params.dto";

export interface IBaseService<M> {
    getAll(getAllParams?: GetAllParamsDto): Promise<M[]>;
    getAllVisible(getAllParams?: GetAllParamsDto): Promise<M[]>;
    get(id: string): Promise<M>;
    getVisible(id: string): Promise<M>;
    update(entity: M): Promise<M>;
    create(entity: M): Promise<M>;
    delete(id: string): Promise<void> | BadGatewayException;
}
