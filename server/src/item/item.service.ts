import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item, ItemDocument } from './schema/item.schema';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  findAll(): Promise<any> {
    try {
      const items = this.itemModel.find({}).exec();
      return items;
    } catch (error) {
      return error;
    }
  }

  findById(_id: string): Promise<any> {
    try {
      const item = this.itemModel.findById(_id).exec();
      return item;
    } catch (error) {
      return error;
    }
  }

  create(data: CreateItemDto): Promise<any> {
    try {
      const item = this.itemModel.create(data);
      return item;
    } catch (error) {
      return error;
    }
  }

  update(_id: string, fields: UpdateItemDto): Promise<any> {
    try {
      const updateResult = this.itemModel
        .updateOne({ _id: _id }, fields)
        .exec();
      return updateResult;
    } catch (error) {
      return error;
    }
  }

  delete(_id: string): Promise<any> {
    try {
      const deleteResult = this.itemModel.deleteOne({ _id: _id }).exec();
      return deleteResult;
    } catch (error) {
      return error;
    }
  }
}
