import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../schemas/todo.schema';
import { Model } from 'mongoose';
import { CreateTodoDto, UpdateTodoDto } from '@validation/dto';

@Injectable()
export class DatabaseTodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  findAll() {
    return this.todoModel.find();
  }

  findOne(id: string) {
    return this.todoModel.findById(id);
  }

  create(createTodoDto: CreateTodoDto) {
    return this.todoModel.create(createTodoDto);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true });
  }

  delete(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
