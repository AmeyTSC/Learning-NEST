import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/Interface/cats.interface';

@Injectable()
export class CatsService {
    private readonly cats:Cat[]=[];

    create(cat: Cat) {  // Change the parameter name to 'cat' (singular)
        this.cats.push(cat);  // Use 'cat' to push into the array
    }
    
    findAll():Cat[]{
        return this.cats
    }
}
