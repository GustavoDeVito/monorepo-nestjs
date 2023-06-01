import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
  formatter(date: Date, language: 'en-US' | 'pt-BR' = 'pt-BR') {
    return new Intl.DateTimeFormat(language, { dateStyle: 'short' }).format(
      date,
    );
  }
}
