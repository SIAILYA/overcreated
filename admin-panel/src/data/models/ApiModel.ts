import {API} from "./API";
import {Column} from "../decorators/Column";


export abstract class ApiModel {
    api!: Partial<API<ApiModel>>
    public static $api: API<ApiModel>

    get _api() {
        // @ts-ignore
        return this.constructor.$api
    }

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
        const __metadata = Reflect.getMetadata("columns", this.constructor)
        const json: any = {}

        for (const thisProp in this) {
            if (thisProp === "api") continue

            const _propMetadata = __metadata[thisProp]
            const _propType = _propMetadata?.type
            const _propValue = this[thisProp]

            if (_propType) {
                if (Array.isArray(_propValue)) {
                    json[thisProp] = _propValue.map((item: any) => item.json)
                } else if (_propType() instanceof ApiModel) {
                    // @ts-ignore
                    json[thisProp] = _propValue.json
                } else {
                    json[thisProp] = _propValue
                }
            } else {
                json[thisProp] = _propValue
            }
        }

        return json
    }

    async load() {
        if (!this.id) {
            return Promise.reject(new Error("Model id is not defined"))
        }

        this.fromJSON(await this._api.getById!(this.id))
        return this
    }

    async create() {
        return this.fromJSON(await this._api.create!(this))
    }
}
