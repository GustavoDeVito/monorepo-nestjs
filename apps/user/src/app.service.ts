import { DatabaseService } from '@database/database';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '@validation/dto';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll() {
    return this.databaseService.findAllUsers();
  }

  findOne(id: string) {
    return this.databaseService.findOneUser(id);
  }

  create(createUserDto: CreateUserDto) {
    return this.databaseService.createUser(createUserDto);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.databaseService.findOneUser(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.databaseService.updateUser(id, updateUserDto);
  }

  async delete(id: string) {
    const user = await this.databaseService.findOneUser(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.databaseService.deleteUser(id);
  }
}
