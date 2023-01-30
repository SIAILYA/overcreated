import {ClientAPI} from "~/data/models/api/ClientAPI";
import {useOvcApi} from "~/hooks/useOvcApi";

export class ProjectsAPI extends ClientAPI {
    async getPreviews() {
        return await useOvcApi(this.path + '/getPreviews', {method: 'POST'})
    }
}
