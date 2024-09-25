import { Body,Controller,Get,Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from 'src/schemas/cat.schemas';


@Controller('cat')
export class CatController {
     constructor(private readonly catsService:CatService){}

    @Post('/create')
    async create(@Body() cat:Cat):Promise<Cat>{
        const createCat=await this.catsService.create(cat);
        console.log(`the cat ${createCat.name} is successful added`)
        return createCat;
    }
    @Get()
    async findCats():Promise<Cat[]>{
        console.log("Data requested");
        return this.catsService.findAll();
    }
}
