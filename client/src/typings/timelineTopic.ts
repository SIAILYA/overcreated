import {Model} from "./model";
import {API} from "./api";

export const timelineTopicAPI: API = {
  createPath: "/create",
  deletePath: "/delete/",
  getPath: "/get",
  path: "timeline/topic",
  updatePath: ""
}

export class TimelineTopic extends Model {
  constructor(value?: Object) {
    super()
    this.setFromObject(value)
  }

  api: API = timelineTopicAPI

  title: string;
  color: string = "#ffffff";

  isSelected: boolean = true;
}
