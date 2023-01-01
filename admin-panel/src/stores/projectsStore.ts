import {defineStore} from "pinia";
import {Project} from "../data/models/Project";
import {API} from "../data/models/API";

export const useProjectsStore = defineStore("projects", {
    state: () => {
        return {
            projects: [] as Project[],
            $api: Project.$api as API<Project>
        }
    },
    actions: {
        async fetchProjects(options: any = {order: {order: 'asc'}}) {
            const _p = await this.$api.getAll(options)
            this.projects = _p.map((project: object) => new Project().fromJSON(project))
        },
        async createProject(project: Project) {
            const _r = await project.create()
            await this.fetchProjects()

            return _r
        }
    }
})
