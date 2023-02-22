import {defineStore} from "pinia";
import {TimelineTopic} from "@data/models/TimelineTopic";

export const useTimelineTopicStore = defineStore("timelineTopicStore", {
    state: () => ({
        timelineTopics: [] as TimelineTopic[]
    }),
    actions: {
        async fetchTimelineTopics() {
            const _t = await TimelineTopic.$api.getAll()
            this.timelineTopics = _t.map((t: object) => new TimelineTopic().fromJSON(t))
        },
        async createTimelineTopic(topic: any) {
            await new TimelineTopic().fromJSON(topic).create()
            await this.fetchTimelineTopics()
        }
    }
})