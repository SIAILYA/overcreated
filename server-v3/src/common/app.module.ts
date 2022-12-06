import {Module} from '@nestjs/common';
import {PortfolioModule} from "../modules/portfolio/portfolio.module";
import {DatabaseModule} from "../modules/common/database/database.module";
import {GraphQLCustomModule} from "../modules/common/graphql/graphql.module";
import {AuthModule} from "../modules/auth/auth.module";
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
