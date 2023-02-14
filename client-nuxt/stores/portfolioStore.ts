import {defineStore} from "pinia";
import {ProjectTopic} from "~/data/models/ProjectTopic";
import {Tech} from "~/data/models/Tech";
import {Project} from "~/data/models/Project";

export const usePortfolioStore = defineStore("portfolio", {
    state: () => ({
        projectTopics: [] as ProjectTopic[],
        techs: [] as Tech[],
        projects: [] as Project[],
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
        },
        async fetchProjects() {
            this.projects = await Project.previews()
        }
    },
    getters: {
        selectedTopics(state) {
            return this.projectTopics.filter(p => p.selected)
        }
    }
})
