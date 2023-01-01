import {BaseService} from "./base.service";
import {OrderableModel} from "../orderable.model";
import {IOrderableService} from "../interface/IOrderable.service";
import {ReorderBodyDto} from "../controller/dto/reorder.body.dto";
import {FindOptionsWhere, LessThanOrEqual, MoreThan, Repository} from "typeorm";

export class OrderableService<M extends OrderableModel> extends BaseService<M> implements IOrderableService<M> {
    constructor(protected readonly repository: Repository<M>) {
        super(repository);
    }

    async reorder(reorderDto: ReorderBodyDto): Promise<void> {
        const {from, to} = reorderDto;

        // @ts-ignore https://github.com/typeorm/typeorm/issues/8939
        const entity = await this.repository.findOne({where: {order: from}} as FindOptionsWhere<M>);

        if (!entity?.id) {
            throw new Error(`Entity with order ${from} not found`);
        }

        // move element with order: from to order: to
        if (from < to) {
            // @ts-ignore
            await this.repository.increment({order: MoreThan(from), order: LessThanOrEqual(to)}, 'order', -1);
        } else {
            // @ts-ignore
            await this.repository.increment({order: MoreThan(to), order: LessThanOrEqual(from)}, 'order', 1);
        }

        // entity.order = to;
        // await this.repository.save(entity);
    }
}
