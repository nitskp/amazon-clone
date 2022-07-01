import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto'; 
import { UpdateOrderDto } from './dto/updateOrder.dto';
import { OrderService } from './order.service';
import { Order } from './schema/order.schema';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService){}

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Order> {
    return this.orderService.findById(id);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Promise<any> {
    return this.orderService.create(createOrderDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto): Promise<any> {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.orderService.delete(id);
  }
}
