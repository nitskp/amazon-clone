import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { Order, OrderDocument } from './schema/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  findAll(): Promise<Order[]> {
    try {
      const orders = this.orderModel.find({}).exec();
      return orders;
    } catch (error) {
      return error;
    }
  }

  findById(_id: string): Promise<Order> {
    try {
      const order = this.orderModel.findById(_id).exec();
      return order;
    } catch (error) {
      return error;
    }
  }

  create(createOrderDto: CreateOrderDto): Promise<any> {
    try {
      const order = this.orderModel.create(createOrderDto);
      return order;
    } catch (error) {
      return error;
    }
  }

  update(_id: string, fields: UpdateOrderDto): Promise<any> {
    try {
      const updateResult = this.orderModel
        .updateOne({ _id: _id }, fields)
        .exec();
      return updateResult;
    } catch (error) {
      return error;
    }
  }

  delete(_id: string) {
    try {
      const deleteResult = this.orderModel.deleteOne({ _id: _id }).exec();
      return deleteResult;
    } catch (error) {
      return error;
    }
  }
}
