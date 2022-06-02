import {Model} from "./model";
import {API} from "./api";

export const timelineEventAPI: API = {
  createPath: "/create",
  deletePath: "/delete/",
  getPath: "/get",
  path: "timeline/event",
  updatePath: ""
}

export class TimelineEvent extends Model {
  constructor(value?: Object) {
    super()
    this.setFromObject(value)
  }

  api: API = timelineEventAPI

  title: string;
  description: string;
  date: Date = new Date();
  dateString: string = "";
  topic: string;
}
