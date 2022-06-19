import styled from "styled-components";
import { CartHeader } from "../CartHeader/CartHeader";
import { CartItem } from "../CartItem/CartItem";
import { Subtotal } from "../Subtotal/Subtotal";
import sampleItem from "../../Assets/images/sampleItem.jpg";

const CartContainer = styled.div``;

export const Cart = () => {
  return (
    <CartContainer>
      <CartHeader />
      <CartItem
        imgUrl={sampleItem}
        price={9000}
        qty={1}
        title="Item Name with some long heading"
      />
      <CartItem
        imgUrl={sampleItem}
        price={1224}
        qty={2}
        title="Item Name with some long heading"
      />
      <Subtotal noOfItems={2} totalPrice={9000 + 1224 * 2} />
    </CartContainer>
  );
};
