import {BadGatewayException, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {IBaseService} from './IBase.service';
import {BaseModel} from '../base.model';

@Injectable()
export class BaseService<M extends BaseModel> implements IBaseService<M> {
    constructor(private readonly repository: Repository<M>) {
    }

    create(entity: M): Promise<M> {
        return this.repository.save(entity)
    }

    getAll(): Promise<Array<M>> {
        return this.repository.find();
    }

    get(id: string): Promise<M> {
        // @ts-ignore
        return this.repository.findOneBy({id: id});
    }

    delete(id: string): Promise<void> {
        try {
            return new Promise(resolve => {
                this.repository.delete(id).then(() => resolve)
            })
        } catch (error) {
            throw new BadGatewayException(error);
        }
    }

    update(entity: M): Promise<M> {
        return this.repository.save(entity)
    }
}
