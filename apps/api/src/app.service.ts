import { Injectable } from '@nestjs/common';
import { add } from "math-helpers";

@Injectable()
export class AppService {
  getHello(): string {
    console.log(add(1,2));
    
    return 'Hello World!';
  }
}
