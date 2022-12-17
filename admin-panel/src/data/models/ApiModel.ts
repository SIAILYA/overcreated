import {BaseModel} from "./BaseModel";
import {API} from "./API";

export abstract class ApiModel extends BaseModel {
    abstract api: API<ApiModel>

    protected constructor(
        public id: string,
        public created_at: Date,
        public updated_at: Date,
    ) {
        super();
    }

    get json() {
        return JSON.stringify(this)
    }

    load() {
        return this.api.getById(this.id)
    }
}
