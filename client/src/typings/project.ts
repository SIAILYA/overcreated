import {Model} from "./model";
import {Topic} from "./topic";
import {API} from "./api";

export const projectAPI: API = {
  path: "projects",
  createPath: "/create",
  deletePath: "/delete/",
  updatePath: "/update/",
  getPath: "/get/"
}


export class Project extends Model {
  constructor(value?: Object) {
    super()
    this.setFromObject(value)
  }

  api: API = projectAPI

  title: string;
  slug: string;
  description: string;
  topics: string[] = [];

  topicsObjects: Array<Topic | Model> = []
  color?: string = "#FFFFFF";
  isVisible?: boolean;
  techs?: string[] = [];
  fullDescription?: string;
  photos?: string;
  link?: string;
  github?: string;
  behance?: string;
  developTime?: number;

  async loadTopics() {
    this.topicsObjects = await Promise.all(this.topics.map(t => new Topic({id: t}).load()))
    return this
  }
}
