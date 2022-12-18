import {defineStore} from "pinia";
import {Project} from "../data/models/Project";
import {API} from "../data/models/API";
import {ProjectTopic} from "../data/models/ProjectTopic";

export const useProjectsStore = defineStore("projects", {
    state: () => {
        return {
            projects: [] as Project[],
            $api: Project.$api as API<Project>
        }
    },
    actions: {
        async fetchProjects() {
            const _p = await this.$api.getAll()
            this.projects = _p.map((project: object) => new Project().fromJSON(project))
        },
        async createProject(project: Project) {
            await project.create()
            await this.fetchProjects()
        }
    }
})
