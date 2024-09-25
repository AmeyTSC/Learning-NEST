import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://amey16:012345678@cluster0.uwzdf.mongodb.net/'), CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
