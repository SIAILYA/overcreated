import {axiosInstance} from "../network";
import {ApiModel} from "./ApiModel";

type method = "all" | "create" | "update" | "delete" | "getAll" | "getById"

export class API<T extends ApiModel> {
    constructor(
        public path: string,
        public methods: "all" | method[] = "all"
    ) {
        if (methods === "all") {
            this.methods = ["create", "update", "getById", "getAll", "delete"]
        }
    }

    async getById(id: string) {
        if (!this.methods.includes("getById")) {
            return Promise.reject(new Error("Method getById are not available"))
        }

        return axiosInstance.get(this.path + "/getById" + id)
    }

    async getAll() {
        if (!this.methods.includes("getAll")) {
            return Promise.reject(new Error("Method getAll are not available"))
        }

        return axiosInstance.get(this.path + "/getAll")
    }

    async create(data: T) {
        if (!this.methods.includes("create")) {
            return Promise.reject(new Error("Method create are not available"))
        }

        return axiosInstance.post(this.path + "/create", data.json)
    }

    async update(data: T) {
        if (!this.methods.includes("update")) {
            return Promise.reject(new Error("Method update are not available"))
        }

        return axiosInstance.put(this.path + "/update/" + data.id, data.json)
    }

    async delete(id: string) {
        if (!this.methods.includes("delete")) {
            return Promise.reject(new Error("Method delete are not available"))
        }

        return axiosInstance.delete(this.path + "/delete/" + id)
    }
}
