import {defineStore} from "pinia";
import {TimelineTopic} from "~/data/models/TimelineTopic";
import {TimelineItem} from "~/data/models/TimelineItem";

export const useTimelineStore = defineStore('timelineStore', {
    state: () => ({
        timelineTopics: [] as TimelineTopic[],
        timelineItems: [] as TimelineItem[]
    }),
    actions: {
        async fetchTimelineTopics() {
            const _t = await TimelineTopic.$api.all()
            this.timelineTopics = _t.map((t: object) => new TimelineTopic().fromJSON(t))
        },
        async fetchTimelineItems() {
            const _t = await TimelineItem.$api.all()
            this.timelineItems = _t.map((t: object) => new TimelineItem().fromJSON(t))
        }
    },
    getters: {
        selectedTopics(): TimelineTopic[] {
            return this.timelineTopics.filter(t => t.selected)
        },
        filteredTimelineItems(): TimelineItem[] {
            const selectedTopicIds = this.selectedTopics.map(t => t.id)

            return this.timelineItems.filter(tItem => selectedTopicIds.includes(tItem.topic.id))
        },
        isAnyTopicSelected(): boolean {
            return this.timelineTopics.some(t => t.selected)
        }
    }
})