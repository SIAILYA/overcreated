import {Model} from "./model";
import {API} from "./api";

export const topicAPI: API = {
  path: "topics",
  createPath: "/create",
  deletePath: "/delete/",
  updatePath: "/update/",
  getPath: "/get/"
}

export class Topic extends Model {
  constructor(value?: any) {
    super()
    this.setFromObject(value)
  }

  api: API = topicAPI

  title: string;
  slug: string;
  color: string = "#FFFFFF";
  isSelected: boolean = true;

  isVisible?: boolean;

  toggleSelect(forceState: boolean | null = null) {
    if (typeof forceState === 'boolean') this.isSelected = forceState
    else this.isSelected = !this.isSelected
  }
}
