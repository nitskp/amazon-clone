import { Prop, Schema } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Item } from 'src/item/schema/item.schema';
import { Order } from 'src/order/schema/order.schema';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  mobile: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Item' }])
  cartItems: Item[];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Order' }])
  orders: Order[];
}
