import {GetAllParamsDto} from "../../../../common/base/controller/dto/getAll.params.dto";
import {ProjectTopicModel} from "../../entities/projectTopic.model";

export class GetProjectPreviewsBodyDto extends GetAllParamsDto {
    topics?: ProjectTopicModel[]
}
