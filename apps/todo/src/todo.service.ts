import { DatabaseTodoService } from '@database/database/services/todo.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from '@validation/dto';

@Injectable()
export class TodoService {
  constructor(private readonly databaseTodoService: DatabaseTodoService) {}

  findAll() {
    return this.databaseTodoService.findAll();
  }

  findOne(id: string) {
    return this.databaseTodoService.findOne(id);
  }

  create(createTodoDto: CreateTodoDto) {
    return this.databaseTodoService.create(createTodoDto);
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const user = await this.databaseTodoService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.databaseTodoService.update(id, updateTodoDto);
  }

  async delete(id: string) {
    const user = await this.databaseTodoService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.databaseTodoService.delete(id);
  }
}
