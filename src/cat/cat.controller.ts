import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from 'src/schemas/cat.schemas';

@Controller('cat')
export class CatController {
  constructor(private readonly catsService: CatService) {}

  @Get()
  async findCats() {
    const results = await this.catsService.findAll();
    console.log('Data requested');
    return results;
  }

  @Post('/create')
  async create(@Body() cat: Cat): Promise<Cat> {
    const createCat = await this.catsService.create(cat);
    console.log(`the cat ${createCat.name} is successful added`);
    return createCat;
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string): Promise<Cat> {
    console.log('Database altered, Enteries deleted');
    return this.catsService.delete(id);
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() catData: Cat): Promise<Cat> {
    console.log('Database altered, Enteries updated');
    return this.catsService.update(id, catData);
  }
}
