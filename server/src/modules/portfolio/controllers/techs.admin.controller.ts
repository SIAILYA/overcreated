import {TechModel} from "../entities/tech.model";
import {TechsService} from "../services/techs.service";
import {Controller} from "@nestjs/common";
import {BaseCRUDController} from "../../../common/base/controller/baseCRUD.controller";


@Controller('api/v3/admin/portfolio/techs')
export class TechsAdminController extends BaseCRUDController<TechModel> {
    constructor(private readonly techsService: TechsService) {
        super(techsService)
    }
}
