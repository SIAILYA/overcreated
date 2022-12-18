import {defineStore} from "pinia";
import {Tech} from "../data/models/Tech";
import {API} from "../data/models/API";

export const useTechStore = defineStore("techStore", {
    state: () => ({
        techs: [],
        $api: Tech.$api as API<Tech>
    }),
    actions: {
        async fetchTechs() {
            const _t = await this.$api.getAll()
            this.techs = _t.map((t: object) => new Tech().fromJSON(t))
        },
        async createTech(tech: any) {
            const _t = new Tech().fromJSON(tech)
            await _t.api.create(_t)
            await this.fetchTechs()
        }
    }
})
