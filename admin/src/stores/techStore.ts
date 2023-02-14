import {defineStore} from "pinia";
import {Tech} from "../data/models/Tech";
import {API} from "../data/models/API";

export const useTechStore = defineStore("techStore", {
    state: () => ({
        techs: [] as Tech[],
        $api: Tech.$api as API<Tech>
    }),
    actions: {
        async fetchTechs() {
            const _t = await this.$api.getAll()
            this.techs = _t.map((t: object) => new Tech().fromJSON(t))
        },
        async createTech(tech: any) {
            await new Tech().fromJSON(tech).create()
            await this.fetchTechs()
        }
    },
    getters: {
        searchTechs(state) {
            return (search: string) => {
                return state.techs.filter(t =>
                    t.title.toLowerCase().includes(search.toLowerCase()))
            }
        }
    }
})
