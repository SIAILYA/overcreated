import {defineStore} from "pinia";

const useProjectsStore = defineStore("projects", {
    state: () => {
        return {
            projects: []
        }
    }
})
