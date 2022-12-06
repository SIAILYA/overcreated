import {Module} from "@nestjs/common";
import {ProjectsHttpModule} from "./modules/projects.http.module";

@Module({
    imports: [ProjectsHttpModule],
    providers: [],
    controllers: []
})
export class PortfolioModule {
}
