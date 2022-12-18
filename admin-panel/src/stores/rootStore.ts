import {defineStore} from "pinia";
import {VNode} from "vue";

export const useRootStore = defineStore("root", {
    state: () => ({
        messages: [] as VNode[]
    })
})
