import {Module} from '@nestjs/common';
import {PortfolioModule} from "./modules/portfolio/portfolio.module";
import {DatabaseModule} from "./modules/database/database.module";
import {GraphQLCustomModule} from "./modules/graphql/graphql.module";
import {AuthModule} from "./modules/auth/auth.module";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        DatabaseModule,
        GraphQLCustomModule,
        PortfolioModule,
        AuthModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
