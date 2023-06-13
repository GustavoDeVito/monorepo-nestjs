import { UserService } from '@database/database/services/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '@validation/dto';

@Injectable()
export class AppService {
  constructor(private readonly userService: UserService) {}

  findAll() {
    return this.userService.findAll();
  }

  findOne(id: string) {
    return this.userService.findOne(id);
  }

  create(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.userService.update(id, updateUserDto);
  }

  async delete(id: string) {
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new NotFoundException();
    }

    return this.userService.delete(id);
  }
}
