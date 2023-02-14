import {ApiModel} from "./ApiModel";

export class OrderableModel extends ApiModel {
    order!: number

    async reorder(newOrder: number) {
        // @ts-ignore
        console.log(this.title, this.order, newOrder);
        await this._api.reorder(this.id, newOrder)
        this.order = newOrder
    }
}
