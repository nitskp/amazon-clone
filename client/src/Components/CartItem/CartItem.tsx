import styled from "styled-components";
import { Button, Price, Select, Text, Span } from "..";

interface Props {
  imgUrl: string;
  title: string;
  price: number | string;
  qty: number;
}

const CartItemConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img-container {
    width: 200px;
    img {
      object-fit: contain;
      width: 200px;
    }
  }
  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 60%;
    h3 {
      font-size: 36px;
    }
    .buy-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      select {
        margin-right: 5px;
      }
    }
  }
  .price {
    width: fit-content;
    position: relative;
    ::before {
      position: absolute;
      top: -22px;
      left: -20px;
      content: "Price";
      color: #b6c1d0;
    }
  }
`;

export const CartItem = ({ imgUrl, title, price, qty }: Props) => {
  return (
    <CartItemConatiner>
      <div className="img-container">
        <img src={imgUrl} alt="Item" />
      </div>
      <div className="item-info">
        <Text type="h3">{title}</Text>
        <div className="buy-info">
          <div>
            <Select name="qty" items={Array.from(Array(qty + 1).keys())} />
            <Span textColor="#b6c1d0">Qty</Span>
          </div>

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
