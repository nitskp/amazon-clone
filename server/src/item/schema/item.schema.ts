import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/user/schema/user.schema';

export type ItemDocument = Item & Document;

export class Img {
  contentType: string;
  data: Buffer;
  fileName: string;
}

export class ItemDetail {
  tableData: { heading: string; value: string }[];
  listData: string[];
}

@Schema()
export class Item {
  @Prop([String])
  category: string; // need to decide category type

  @Prop()
  title: string;

  @Prop()
  avgReview: number; // can be derived. try to see this

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'User' }])
  reviews: User[];

  @Prop({ type: Img })
  img: Img;

  @Prop()
  price: number;

  @Prop()
  discountInPercent: number;

  @Prop({ type: ItemDetail })
  itemDetail: ItemDetail;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
