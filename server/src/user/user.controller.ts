import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAll(): string {
    return 'All users returned';
  }

  @Get(':id')
  findById(): string {
    return `find user by id`;
  }

  @Post()
  create(): string {
    return `Create user`;
  }

  @Patch()
  update(): string {
    return `this updates a field`;
  }

  @Delete()
  delete(): string {
    return `this deletes an user`;
  }
}
