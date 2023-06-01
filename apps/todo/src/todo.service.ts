import { Injectable } from '@nestjs/common';
import { DateService } from 'lib/date';

@Injectable()
export class TodoService {
  constructor(private readonly date: DateService) {}

  getHello(): string {
    return 'Hello World! Todo:' + this.date.formatter(new Date(), 'en-US');
  }
}
