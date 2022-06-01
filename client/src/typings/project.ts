import {Model} from "./model";
import {API} from "./api";

export class Project extends Model {
  constructor(value?: Object) {
    super()
    this.setFromObject(value)
  }

  api: API = {
    path: "projects",
    createPath: "/create",
    deletePath: "/delete/",
    updatePath: "/update/",
    getPath: "/get/"
  }

  title: string;
  slug: string;
  description: string;
  topics: string[];

  color?: string = "#FFFFFF";
  isVisible?: boolean;
  techs?: string[] = [];
  fullDescription?: string;
  photos?: string;
  link?: string;
  github?: string;
  behance?: string;
  developTime?: number;
}
