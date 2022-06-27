import { forwardRef, Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [ItemService],
  controllers: [ItemController],
  exports: [],
})
export class ItemModule {}
