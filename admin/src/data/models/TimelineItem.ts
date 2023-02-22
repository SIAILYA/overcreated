import {ApiModel} from "@data/models/common/ApiModel";
import {API} from "@data/models/common/API";

export class TimelineItem extends ApiModel {
    api = new API('/timeline/timelineItems')


}