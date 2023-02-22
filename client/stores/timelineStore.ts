import {defineStore} from "pinia";
import {TimelineTopic} from "~/data/models/TimelineTopic";

export const useTimelineStore = defineStore('timelineStore', {
    state: () => ({
        timelineTopics: [] as TimelineTopic[]
    }),
    actions: {
        async fetchTimelineTopics() {
            const _t = await TimelineTopic.$api.all()
            this.timelineTopics = _t.map((t: object) => new TimelineTopic().fromJSON(t))
        }
    },
    getters: {
        isAnyTopicSelected(): boolean {
            return this.timelineTopics.some(t => t.selected)
        }
    }
})