import {defineStore} from "pinia";
import {TimelineItem} from "@data/models/TimelineItem";

export const useTimelineStore = defineStore("timelineStore", {
    state: () => ({
        timelineItems: [] as TimelineItem[]
    }),
    actions: {
        async fetchTimelineItems() {
            const _t = await TimelineItem.$api.getAll()
            this.timelineItems = _t.map((t: object) => new TimelineItem().fromJSON(t))
        }
    }
})