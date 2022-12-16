import {Picture} from "./Picture";
import {ApiModel} from "./ApiModel";
import {ModelApi} from "./ModelApi";

export class Project extends ApiModel {
    static api = new ModelApi("/portfolio/projects")

    constructor(
        public id: string,
        public created_at: Date,
        public updated_at: Date,
        public title: string,
        public slug: string,
        public color: string,
        public isVisible: boolean,
        public description: string,
        public fullDescription: string,
        public pictures: Picture[],
        public link: string,
        public github: string,
        public behance: string,
        public developTime: number
    ) {
        super(id, created_at, updated_at);
    }
}
