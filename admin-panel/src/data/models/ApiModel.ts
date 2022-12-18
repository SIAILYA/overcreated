import {API} from "./API";
import {Column} from "../decorators/Column";


export abstract class ApiModel {
    abstract api: API<ApiModel>

    @Column()
    id!: string

    @Column({type: Date})
    _created_at!: Date

    @Column({type: Date})
    _updated_at!: Date


    constructor(id: string = null as unknown as string) {
        this.id = id
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
                } else if (_propValue !== undefined && _propType !== String) {
                    this[thisProp] = new _propType(_propValue)
                }
            } else {
                this[thisProp] = _propValue
            }
        }

        return this
    }

    get json() {
        return JSON.stringify(this)
    }

    async load() {
        if (!this.id) {
            return Promise.reject(new Error("Model id is not defined"))
        }

        this.fromJSON(await this.api.getById(this.id))
        return this
    }
}
