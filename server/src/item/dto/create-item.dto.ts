import { Img, ItemDetail } from '../schema/item.schema';

export class CreateItemDto {
  category: string[]; // need to decide category type

  view: number; // can be derived. try to see this

  reviews: string[];

  img: Img;

  discountInPercent: number;

  itemDetail: ItemDetail;
}
