import {Topic} from "../../topics/schemas/topic.schema";

export class ProjectDto {
  readonly title: string
  readonly slug: string
  readonly color: string
  readonly isVisible: boolean
  readonly topics: string[]
  readonly techs: string[]
  readonly description: string
  readonly fullDescription: string
  readonly photos: string
  readonly github: string
  readonly behance: string
  readonly developTime: number
}
