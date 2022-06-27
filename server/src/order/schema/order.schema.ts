import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
// need to see if I can export it through module
import { Item } from 'src/item/schema/item.schema';

export type OrderDocument = Order & Document;

export class Address {
  houseNo: string;
  lane?: string;
  district: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
}

@Schema()
export class Order {
  @Prop()
  datePlaced: Date;

  @Prop()
  dateDelivered: Date;

  @Prop()
  returnDate: Date;

  @Prop()
  totalCost: number;

  @Prop({ type: Address })
  shippingAddress: Address;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Item' }])
  items: Item[];
}
