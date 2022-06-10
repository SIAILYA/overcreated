import {Model} from "./model";
import {Topic} from "./topic";
import {API} from "./api";
import axios from "axios";
import {BACK_API} from "../../config";

export const projectAPI: API = {
  path: "projects",
  createPath: "/create",
  deletePath: "/delete/",
  updatePath: "/update/",
  getPath: "/get/",
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

  topicsObjects: Array<Topic> = []
  color?: string = "#FFFFFF";
  isVisible?: boolean;
  techs?: string[] = [];
  fullDescription?: string;
  pictures?: string[] = [];
  link?: string;
  github?: string;
  behance?: string;
  developTime?: number;

  async loadBySlug() {
    const projectResponse = (await axios.get(BACK_API + projectAPI.path + projectAPI.getPath.slice(0, projectAPI.getPath.length - 1) + "BySlug/" + this.slug + "?populate=true")).data
    projectResponse.topicsObjects = projectResponse.topics.map((t: any) => new Topic(t))
    projectResponse.topics = projectResponse.topics.map((t: any) => t.id)

    this.setFromObject(projectResponse)
  }
}
