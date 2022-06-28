import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import configuration from "../config/configuration";
import {ApiController} from './api/api.controller';
import {TopicsModule} from "./topics/topics.module";
import {AuthService} from "./auth/auth.service";
import {JwtModule, JwtService} from '@nestjs/jwt';
import {ProjectsModule} from './projects/projects.module';
import {TimelineModule} from './timeline/timeline.module';
import {MulterModule} from '@nestjs/platform-express';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, process.env.CLIENT_DIST),
      exclude: ['/api*', '/upload*'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, process.env.UPLOAD_FOLDER),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    JwtModule.register({secret: process.env.SECRET_KEY, signOptions: {expiresIn: process.env.JWT_EXPIRE}}),
    MulterModule.register({dest: './public/upload'}),
    TopicsModule,
    ProjectsModule,
    TimelineModule,
    QuotesModule,
  ],
  providers: [AuthService, JwtService],
  exports: [AuthService],
  controllers: [ApiController]
})
export class AppModule {
}
