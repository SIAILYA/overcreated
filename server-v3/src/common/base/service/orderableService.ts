import {BaseService} from "./base.service";
import {OrderableModel} from "../orderable.model";
import {IOrderService} from "./IOrder.service";
import {ReorderDto} from "../ReorderDto";
import {LessThanOrEqual, MoreThan, Repository} from "typeorm";

export class OrderableService<M extends OrderableModel> extends BaseService<M> implements IOrderService<M> {
    constructor(protected readonly repository: Repository<M>) {
        super(repository);
    }

    async reorder(reorderDto: ReorderDto): Promise<void> {
        const {from, to} = reorderDto;

        // @ts-ignore https://github.com/typeorm/typeorm/issues/8939
        const entity = await this.repository.findOne({where: {order: from}});

        if (from > to) {
            // @ts-ignore
            await this.repository.increment({order: MoreThan(to), order: LessThanOrEqual(from)}, 'order', 1);
        } else {
            // @ts-ignore
            await this.repository.increment({order: MoreThan(from), order: LessThanOrEqual(to)}, 'order', -1);
        }

        // @ts-ignore
        await this.repository.update({id: entity.id}, {order: to});
    }
}
