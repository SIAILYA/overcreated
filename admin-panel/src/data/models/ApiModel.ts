import {BaseModel} from "./BaseModel";
import {ModelApi} from "./ModelApi";

export abstract class ApiModel extends BaseModel {
    static api: ModelApi | null = null;

    protected constructor(
        public id: string,
        public created_at: Date,
        public updated_at: Date
    ) {
        super();
    }
}
