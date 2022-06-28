import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  findAll(): string {
    return 'All orders returned';
  }

  @Get(':id')
  findById(): string {
    return `find order by id`;
  }

  @Post()
  create(): string {
    return `Create order`;
  }

  @Patch()
  update(): string {
    return `this updates a field`;
  }

  @Delete()
  delete(): string {
    return `this deletes an order`;
  }
}
