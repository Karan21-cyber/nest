import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAll(): string {
    return 'All Data fetched';
  }

  helloKaran(): string {
    return 'Hello Karan';
  }
}
