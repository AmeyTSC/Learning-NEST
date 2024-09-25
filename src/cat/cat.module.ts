import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Cat,CatSchema } from 'src/schemas/cat.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]), 
  ],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {}
