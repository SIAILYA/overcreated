import {Module} from "@nestjs/common";
import {ProjectsModule} from "./modules/projects.module";

@Module({
    imports: [ProjectsModule],
    providers: [],
    controllers: []
})
export class PortfolioModule {
}
