import styled from "styled-components";
import { Button, Price, Select, Text } from "..";

interface Props {
  imgUrl: string;
  title: string;
  price: number | string;
  qty: number;
}

const CartItemConatiner = styled.div`
  display: flex;
`;

export const CartItem = ({ imgUrl, title, price, qty }: Props) => {
  return (
    <CartItemConatiner>
      <div className="img-conatiner">
        <img src={imgUrl} alt="Item" />
      </div>
      <div className="item-info">
        <Text type="h3">{title}</Text>
        <div className="buy-info">
          <Select name="qty" items={Array.from(Array(qty + 1).keys())} />
          <Button plainText>Delete</Button>
          <Button plainText>Save for later</Button>
          <Button plainText>See more like this</Button>
        </div>
      </div>
      <div className="price">
        <Price price={Number(price)} />
      </div>
    </CartItemConatiner>
  );
};
