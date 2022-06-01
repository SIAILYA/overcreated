import {Model} from "./model";
import {API} from "./api";

export class Topic extends Model {
  constructor(value?: any) {
    super()
    this.setFromObject(value)
  }

  api: API = {
    path: "topics",
    createPath: "/create",
    deletePath: "/delete/",
    updatePath: "/update/",
    getPath: "/get/"
  }

  title: string;
  slug: string;
  color: string = "#FFFFFF";

  isVisible?: boolean;
}
