import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from 'src/schemas/cat.schemas';

@Injectable()
export class CatService {
    constructor(@InjectModel(Cat.name) private catModel:Model<Cat>){};

    async create(cat: Cat): Promise<Cat> {
      // Use the provided cat object directly instead of Cat (which is the class)
      const newCat = new this.catModel(cat);  // Create a new instance of the model
      return newCat.save();  // Save the cat document to MongoDB
    }
      // Find all cats from the database
      async findAll(): Promise<Cat[]> {  // Return a Promise of an array of Cat documents
        return this.catModel.find().exec()  // Retrieve all documents from the Cat collection
      }
}
