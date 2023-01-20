import {ApiModel} from "./ApiModel";

export class OrderableModel extends ApiModel {
    order!: number

    async reorder(newOrder: number) {
        await this._api.reorder(this.id, newOrder)
        this.order = newOrder
    }
}
