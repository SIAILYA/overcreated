import {BaseReadController} from "../../../common/base/controller/baseRead.controller";
import {TechModel} from "../entities/tech.model";
import {TechsService} from "../services/techs.service";
import {Controller} from "@nestjs/common";


@Controller('api/v3/portfolio/techs')
export class TechsController extends BaseReadController<TechModel> {
    constructor(private readonly techsService: TechsService) {
        super(techsService)
    }
}
