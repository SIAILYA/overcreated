import {ApiModel} from "./ApiModel";
import {Entity} from "../decorators/Entity";
import {Column} from "../decorators/Column";
import {axiosInstance} from "../network";

@Entity({disableApi: true})
export class Picture extends ApiModel {
    api = {}

    @Column()
    url!: string

    @Column()
    caption?: string

    get fullUrl(): string {
        return `http://localhost:5000/${this.url}`
    }

    static async upload(files: File | File[]): Promise<Picture | Picture[]> {
        const formData = new FormData()
        const _upload = async () => {
            return (await axiosInstance.post(
                "/upload/pictures",
                formData,
                {headers: {"Content-Type": "multipart/form-data"}}
            )).data
        }

        if (files instanceof File) {
            formData.append("file", files)
            return new Picture().fromJSON(await _upload())
        } else {
            files.forEach(file => formData.append("file", file))
            return (await _upload()).map((json: any) => new Picture().fromJSON(json))
        }
    }
}
