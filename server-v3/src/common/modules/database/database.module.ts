import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 49154,
            username: 'postgres',
            password: 'postgrespw',
            database: 'ovc',
            entities: [],
            synchronize: true,
            autoLoadEntities: true
        }),
    ],
    exports: [TypeOrmModule]
})
export class DatabaseModule {
}
