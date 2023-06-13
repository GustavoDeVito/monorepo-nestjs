import { DatabaseUserService } from '@database/database/services/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '@validation/dto';

@Injectable()
export class UserService {
  constructor(private readonly databaseUserService: DatabaseUserService) {}

  findAll() {
    return this.databaseUserService.findAll();
  }

  findOne(id: string) {
    return this.databaseUserService.findOne(id);
  }

  create(createUserDto: CreateUserDto) {
    return this.databaseUserService.create(createUserDto);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.databaseUserService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.databaseUserService.update(id, updateUserDto);
  }

  async delete(id: string) {
    const user = await this.databaseUserService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.databaseUserService.delete(id);
  }
}
