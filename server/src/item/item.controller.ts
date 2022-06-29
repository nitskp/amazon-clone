import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
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
  @UseInterceptors(FilesInterceptor('imgs'))
  create(
    @Body() createItemDto: CreateItemDto,
    @UploadedFiles() imgs: Array<Express.Multer.File>,
  ): Promise<any> {
    return this.itemService.create(createItemDto, imgs);
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
