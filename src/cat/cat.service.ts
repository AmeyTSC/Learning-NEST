import { Body, Injectable, NotFoundException, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from 'src/schemas/cat.schemas';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(cat: Cat): Promise<Cat> {
    const newCat = new this.catModel(cat);
    return newCat.save();
  }

  async findAll(): Promise<{ count: number; cats: Cat[] }> {
    const cats = await this.catModel.find().exec();
    const count = cats.length;
    return { count, cats };
  }

  async delete(id: string): Promise<Cat> {
    const deleteItem = await this.catModel.findByIdAndDelete(id);
    return deleteItem;
  }

  async update(id: string, @Body() CatData: Cat): Promise<Cat> {
    const cats = await this.catModel.findById(id);
    if (!cats) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    cats.name = CatData.name;
    cats.age = CatData.age;
    cats.breed = CatData.breed;
    return cats.save();
  }
  
}
