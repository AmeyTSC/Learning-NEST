import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/cats/Interface/cats.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService:CatsService){}
    @Post('/create')
    async create(@Body() cat:Cat){
        this.catsService.create(cat);
        return `the Cat is successfully created`;
    }
    @Get()
    findCats(){
        console.log("get request")
        return this.catsService.findAll();
    }
}
