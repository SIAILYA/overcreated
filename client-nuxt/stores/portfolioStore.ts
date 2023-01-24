import {defineStore} from "pinia";
import {ProjectTopic} from "~/data/models/ProjectTopic";

export const usePortfolioStore = defineStore("portfolio", {
    state: () => ({
        projectTopics: [] as ProjectTopic[],
    }),
    actions: {
        async fetchProjectTopics() {
            this.projectTopics = await ProjectTopic.all();
        },
        deselectAllTopics() {
            this.projectTopics.forEach(i => i.selected = false)
        }
    }
})
