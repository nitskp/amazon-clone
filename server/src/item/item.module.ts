import { forwardRef, Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { UserModule } from 'src/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './schema/item.schema';

@Module({
  imports: [
    forwardRef(() => UserModule),
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
  providers: [ItemService],
  controllers: [ItemController],
  exports: [],
})
export class ItemModule {}
