import {API} from "../models/API";

export const Entity = (target: any) => {
        target.$api = new API(new target().api?.path || `/${target.name.toLowerCase()}`)
}
