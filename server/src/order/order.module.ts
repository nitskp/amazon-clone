import { forwardRef, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [forwardRef(() => ItemModule)],
  providers: [OrderService],
  controllers: [OrderController],
  exports: [],
})
export class OrderModule {}
