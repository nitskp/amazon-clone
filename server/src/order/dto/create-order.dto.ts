import { Address } from '../schema/order.schema';

export class Order {
  datePlaced: Date;

  dateDelivered: Date;

  returnDate: Date;

  totalCost: number;

  shippingAddress: Address;

  items: string[];
}
