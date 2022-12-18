import {API} from "./API";
import {Column} from "../decorators/Column";


export abstract class ApiModel {
    abstract api: API<ApiModel>


    constructor() {
    }

    public fromJSON(json: object): this {
        const unknownJson: unknown = json;
        const __metadata = Reflect.getMetadata("columns", this.constructor)

        if (unknownJson === null ||
            Array.isArray(unknownJson) ||
            typeof unknownJson !== "object") {

            return this
        }

        for (const thisProp in this) {
            if (thisProp === "api") continue

            const _propMetadata = __metadata[thisProp]
            const _propType = _propMetadata?.type
            const _propValue = (unknownJson as any)[thisProp]

            if (_propType) {
                if (Array.isArray(_propValue)) {
                    this[thisProp] = _propValue.map((item: any) => new _propType[0]().fromJSON(item)) as any
                } else if (_propType() instanceof ApiModel) {
                    this[thisProp] = new _propType().fromJSON(_propValue)
                } else if (_propValue !== undefined) {
                    this[thisProp] = new _propType(_propValue)
                }
            } else {
                this[thisProp] = _propValue
            }
        }

        return this
    }

    @Column()
    id!: string

    @Column({type: Date})
    _created_at!: Date

    @Column()
    _updated_at!: Date
}
