import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { DatabaseUserService } from './services/user.service';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { DatabaseTodoService } from './services/todo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Todo.name, schema: TodoSchema },
    ]),
  ],
  providers: [DatabaseUserService, DatabaseTodoService],
  exports: [DatabaseUserService, DatabaseTodoService],
})
export class DatabaseModule {}
