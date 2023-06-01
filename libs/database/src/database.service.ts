import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import {
  CreateTodoDto,
  CreateUserDto,
  UpdateTodoDto,
  UpdateUserDto,
} from '@validation/dto';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(TodoEntity)
    private todosRepository: Repository<TodoEntity>,
  ) {}

  findAllUsers() {
    return this.usersRepository.find();
  }

  findOneUser(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }

  createUser(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ id }, updateUserDto);
  }

  deleteUser(id: string) {
    return this.usersRepository.delete({ id });
  }

  findAllTodos() {
    return this.todosRepository.find();
  }

  findOneTodo(id: string) {
    return this.todosRepository.findOne({ where: { id } });
  }

  createTodo(createTodoDto: CreateTodoDto) {
    return this.todosRepository.create(createTodoDto);
  }

  updateTodo(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todosRepository.update({ id }, updateTodoDto);
  }

  deleteTodo(id: string) {
    return this.todosRepository.delete({ id });
  }
}
