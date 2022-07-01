import { Address } from '../schema/order.schema';

export class CreateOrderDto {
  datePlaced: Date;

  dateDelivered: Date;

  returnDate: Date;

  totalCost: number;

  shippingAddress: Address;

  items: string[];
}
