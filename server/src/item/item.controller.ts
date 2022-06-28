import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  findAll(): Promise<any> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<any> {
    return this.itemService.findById(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<any> {
    return this.itemService.create(createItemDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<any> {
    return this.itemService.update(id, updateItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.itemService.delete(id);
  }
}
