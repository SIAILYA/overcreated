import {Model} from "./model";
import {API} from "./api";
import axios from "axios";
import {BACK_API} from "../../config";

export class Project implements Model {
  constructor(value?: Object) {
    this.setFromObject(value)
  }

  api: API = {
    path: "projects",
    createPath: "/create",
    deletePath: "/delete/",
    updatePath: "/update/",
    getPath: "/get/"
  }

  id: string;
  title: string;
  slug: string;
  description: string;
  topics: string[];

  color?: string = "#FFFFFF";
  isVisible?: boolean;
  techs?: string[] = [];
  fullDescription?: string;
  photos?: string;
  link?: string;
  github?: string;
  behance?: string;
  developTime?: number;

  private setFromObject(value: any) {
    if (value) {
      this.id = value?.id || value?._id
      this.title = value?.title
      this.slug = value?.slug
      this.description = value?.description
      this.topics = value?.topics
      this.color = value?.color
      this.isVisible = value?.isVisible
      this.techs = value?.techs
      this.fullDescription = value?.fullDescription
      this.photos = value?.photos
      this.link = value?.link
      this.github = value?.github
      this.behance = value?.behance
      this.developTime = value?.developTime
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
