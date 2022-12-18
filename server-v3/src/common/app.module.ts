import {Module} from '@nestjs/common';
import {PortfolioModule} from "../modules/portfolio/portfolio.module";
import {DatabaseModule} from "../modules/common/database/database.module";
import {AuthModule} from "../modules/auth/auth.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UploadModule} from "../modules/common/upload/upload.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        ServeStaticModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return [{
                    rootPath: join(__dirname, '..', '..', configService.get('UPLOAD_PATH')),
                    serveRoot: '/uploads/',
                    serveStaticOptions: {
                        extensions: ['jpg', 'jpeg', 'png', 'gif', 'svg'],
                    }
                }]
            }
        }),
        DatabaseModule,
        PortfolioModule,
        AuthModule,
        UploadModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
