import "reflect-metadata";
import {ClientAPI} from "~/data/models/api/ClientAPI";

type EntityOptions = {
    disableApi?: boolean
}

export const Entity = (options: EntityOptions = {disableApi: false}) => {
    return (target: any) => {
        if (!options.disableApi) {
            target.$api = new target().api
        } else {
            target.$api = null
        }
    }
}
