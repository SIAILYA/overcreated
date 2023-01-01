import {ApiModel} from "./ApiModel";

export class OrderableModel extends ApiModel {
    order!: number

    async reorder(newIndex: number) {
        await this._api.instance.post(this._api.path + "/reorder", {from: this.order, to: newIndex})
        this.order = newIndex
    }
}
