import {Module} from '@nestjs/common';
import {PortfolioModule} from "./modules/portfolio/portfolio.module";
import {DatabaseModule} from "./modules/database/database.module";

@Module({
    imports: [DatabaseModule, PortfolioModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
