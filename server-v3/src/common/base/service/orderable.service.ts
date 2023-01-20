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
        const {id, new_order} = reorderDto;
        const orderable = await this.repository.findOneBy({id} as FindOptionsWhere<M>);
        const currentOrder = orderable.order;

        if (new_order > currentOrder) {
            await this.shiftEntities(currentOrder, new_order, -1);
        } else if (new_order < currentOrder) {
            await this.shiftEntities(new_order, currentOrder, 1);
        }

        orderable.order = new_order;
        await this.repository.save(orderable);
    }

    async shiftEntities(start: number, end: number, shift: number) {
        await this.repository
            .createQueryBuilder()
            .update(this.repository.metadata.target)
            .set({ order: () => `CASE
                            WHEN "order" >= ${start} AND "order" < ${end} THEN "order" + ${shift}
                            ELSE "order"
                            END`
            })
            .execute();
    }
}
