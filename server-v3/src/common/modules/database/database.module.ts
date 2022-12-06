import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {PictureModel} from "../common/picture.model";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 49154,
            username: 'postgres',
            password: 'postgrespw',
            database: 'ovc',
            entities: [PictureModel],
            synchronize: true,
            autoLoadEntities: true
        }),
    ],
    exports: [TypeOrmModule]
})
export class DatabaseModule {
}
