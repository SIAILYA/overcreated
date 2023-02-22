import {defineStore} from "pinia";
import {ProjectTopic} from "@data/models/ProjectTopic";
import {API} from "@data/models/common/API";

export const useProjectTopicStore = defineStore("projectTopicStore", {
    state: () => ({
        projectTopics: [] as ProjectTopic[],
        $api: ProjectTopic.$api as API<ProjectTopic>
    }),
    actions: {
        async fetchProjectTopics() {
            const _t = await this.$api.getAll()
            this.projectTopics = _t.map((t: object) => new ProjectTopic().fromJSON(t))
        },
        async createProjectTopic(projectTopic: any) {
            await new ProjectTopic().fromJSON(projectTopic).create()
            await this.fetchProjectTopics()
        }
    }
})
