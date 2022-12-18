import {defineStore} from "pinia";
import {Project} from "../data/models/Project";
import {API} from "../data/models/API";

export const useProjectsStore = defineStore("projects", {
    state: () => {
        return {
            projects: [],
            $api: Project.$api as API<Project>
        }
    },
    actions: {
        async fetchProjects() {
            const _p = await this.$api.getAll()
            this.projects = _p.map((project: object) => new Project().fromJSON(project))
        }
    }
})
