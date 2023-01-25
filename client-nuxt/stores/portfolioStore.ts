import {defineStore} from "pinia";
import {ProjectTopic} from "~/data/models/ProjectTopic";
import {Tech} from "~/data/models/Tech";

export const usePortfolioStore = defineStore("portfolio", {
    state: () => ({
        projectTopics: [] as ProjectTopic[],
        techs: [] as Tech[],
        selectedTechs: [] as Tech[],
    }),
    actions: {
        async fetchProjectTopics() {
            this.projectTopics = await ProjectTopic.all();
        },
        deselectAllTopics() {
            this.projectTopics.forEach(i => i.selected = false)
        },
        async fetchTechs() {
            this.techs = await Tech.all();
        }
    },
    getters: {
        selectTechs(state) {
            return this.techs.map(t => ({
                label: t.title,
                value: t.slug
            }))
        }
    }
})
