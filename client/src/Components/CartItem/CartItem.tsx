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
  align-items: flex-start;
  justify-content: space-between;
  gap: 25px;
  border-bottom: 1px solid #b6c1d0;
  @media screen and (max-width: 789px) {
    flex-direction: column;
    align-items: center;
  }
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
    margin-top: 20px;
    max-width: 60%;
    @media screen and (max-width: 1040px) {
      max-width: 100%;
      width: 100%;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 20px;
      @media screen and (max-width: 1040px) {
        text-align: center;
      }
    }
    .buy-info {
      display: grid;
      align-items: center;
      justify-items: center;
      gap: 16px;
      grid-template-columns: repeat(4, 1fr);
      @media screen and (max-width: 476px) {
        grid-template-columns: 1fr 1fr;
      }
      select {
        margin-right: 5px;
      }
    }
  }
  .price {
    width: fit-content;
    position: relative;
    width: 100%;
    margin-top: 20px;
    text-align: right;
    p {
      display: inline-block;
    }
    p::after {
      position: absolute;
      top: -42px;
      left: -22px;
      font-size: 14px;
      content: "Price";
      color: #b6c1d0;
      @media screen and (max-width: 789px) {
        top: 1px;
        left: -60px;
      }
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
        <Text type="h3" fontSize="18px">
          {title}
        </Text>
        <div className="buy-info">
          <Select
            name="qty"
            items={Array.from(Array(qty + 1).keys())}
            addOnText="Qty:"
          />
          {/* <Span textColor="#b6c1d0">Qty</Span> */}

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
