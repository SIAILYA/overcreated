import {defineStore} from "pinia";
import {Project} from "../data/models/Project";

export const useProjectsStore = defineStore("projects", {
    state: () => {
        return {
            projects: []
        }
    },
    actions: {
        async fetchProjects() {
            const _p = await new Project().api.getAll()
            this.projects = _p.map((project: object) => new Project().fromJSON(project))
        }
    }
})
