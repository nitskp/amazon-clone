import { forwardRef, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ItemModule } from 'src/item/item.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/order.schema';

@Module({
  imports: [forwardRef(() => ItemModule), MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [],
})
export class OrderModule {}
