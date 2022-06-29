import { IsNotEmpty } from 'class-validator';
import { Img, ItemDetail } from '../schema/item.schema';

export class CreateItemDto {
  @IsNotEmpty()
  category: string; // need to decide category type

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  price: number;

  avgReview: number; // can be derived. try to see this

  reviews: string[];

  imgs: Img[];

  discountInPercent: number;

  itemDetail: ItemDetail;
}
