import {BaseModel} from "~/data/models/BaseModel";
import {useOvcApi} from "~/hooks/useOvcApi";

export class ProjectTopic extends BaseModel {
    title!: string
    color!: string

    constructor(data: any) {
        super()

        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                // @ts-ignore
                this[key] = data[key]
            }
        }
    }

    static path = "/portfolio/projectTopics"
    static async all(): Promise<ProjectTopic[]> {
        const _r = await useOvcApi(ProjectTopic.path + '/getAll', {method: "POST"})
        return _r.map((i: any) => new ProjectTopic(i))
    }
}
