import {BaseService} from "./base.service";
import {OrderableModel} from "../orderable.model";
import {IOrderableService} from "../interface/IOrderable.service";
import {ReorderBodyDto} from "../controller/dto/reorder.body.dto";
import {FindOptionsWhere, Repository} from "typeorm";

export class OrderableService<M extends OrderableModel> extends BaseService<M> implements IOrderableService<M> {
    constructor(protected readonly repository: Repository<M>) {
        super(repository);
    }

    async reorder(reorderDto: ReorderBodyDto): Promise<void> {
        const {id, newOrder} = reorderDto;
        const orderable = await this.repository.findOneBy({id} as FindOptionsWhere<M>);
        const currentOrder = orderable.order;

        if (newOrder > currentOrder) {
            await this.shiftEntities(currentOrder, newOrder, -1);
        } else if (newOrder < currentOrder) {
            await this.shiftEntities(newOrder, currentOrder, 1);
        }

        orderable.order = newOrder;
        await this.repository.save(orderable);
    }

    async shiftEntities(currentOrder: number, newOrder: number, direction: number) {
        let query = this.repository
            .createQueryBuilder()
            .update(this.repository.metadata.target)
            .set({ order: () => `"order" + ${direction}` });

        if (direction === 1) {
            query = query.where(`"order" >= ${currentOrder} AND "order" < ${newOrder}`);
        } else {
            query = query.where(`"order" > ${currentOrder} AND "order" <= ${newOrder}`);
        }

        await query.execute();
    }
}
