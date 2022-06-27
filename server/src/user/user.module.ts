import { forwardRef, Module } from '@nestjs/common';
import { ItemModule } from 'src/item/item.module';
import { OrderModule } from 'src/order/order.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [forwardRef(() => OrderModule), forwardRef(() => ItemModule)],
  providers: [UserService],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}
