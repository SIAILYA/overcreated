import axios from "axios";
import {BACK_API} from "../../config";
import {API} from "./api";

export abstract class Model {
  api: API = {
    createPath: "",
    deletePath: "",
    getPath: "",
    path: undefined,
    updatePath: ""
  }

  id: string;

  setFromObject(value?: any) {
    if (value) {
      for (let key of Object.keys(value)) {
        if (this.hasOwnProperty(key)) {
          // @ts-ignore
          this[key] = value[key]
        }
      }

      this.id = value?.id || value?._id
    }
  }

  async create(): Promise<Model> {
    await axios.post(BACK_API + this.api.path + this.api.createPath, this)
    return this
  }

  async delete(): Promise<Model> {
    await axios.delete(BACK_API + this.api.path + this.api.deletePath + this.id)
    return this
  }

  async load(id?: string | null): Promise<Model> {
    if (id != null) {
      this.id = id
    }

    if (!this.id) {
      throw new Error("ID of Project is not specified, can't load instance")
    }

    this.setFromObject((await axios.get(BACK_API + this.api.path + this.api.getPath + this.id)).data)

    return this
  }

  async update(): Promise<Model> {
    if (!this.id) {
      throw new Error("ID of Project is not specified, can't update instance")
    }

    return await axios.patch(BACK_API + this.api.path + this.api.updatePath + this.id, this)
  }
}
