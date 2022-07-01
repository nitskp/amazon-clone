import { Img } from "src/item/schema/item.schema";

export class CreateUserDto {
  name: string;

  mobile: string;

  email: string;

  password: string;

  cartItems: string[];

  orders: string[];

  profilePic: Img;
}
