import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { DateModule } from '@lib/date';

@Module({
  imports: [DateModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
