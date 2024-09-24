import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Amey Gupta!';
  }
  getMessage():string{
    return "Yes, How are you?"
  }
}
