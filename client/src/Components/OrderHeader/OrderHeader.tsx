import styled from "styled-components";
import { Span, Price } from "..";

interface Props {
  orderId: string;
  dateOrdered: Date;
  totalCost: number;
  shippingAddress: string;
  orderDetails: string;
  invoice: string;
}

const Header = styled.div`
  background-color: #f0f2f2;
  padding: 14px 18px;
  border: 1px solid #c6c9c9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow-x: auto;
  .row {
    display: grid;
    grid-template-columns: repeat(3, 1fr) 3fr;
    column-gap: 10px;
    row-gap: 12px;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: 400;
      color: #565959;
    }
    p::before {
      top: 0;
    }
    .price {
      padding-left: 20px;
    }
  }
  .order-details {
    width: 100%;
    text-align: right;
    span{
        margin-left: 20px;
    }
  }
`;

export const OrderHeader = ({
  orderId,
  dateOrdered,
  totalCost,
  shippingAddress,
  orderDetails,
  invoice,
}: Props) => {
  return (
    <Header>
      <div className="row">
        <Span fontSize="12px" textColor="#565959">
          ORDER PLACED
        </Span>
        <Span fontSize="12px" textColor="#565959">
          TOTAL
        </Span>
        <Span fontSize="12px" textColor="#565959">
          SHIP TO
        </Span>
        <Span className="order-details" fontSize="12px" textColor="#565959">
          ORDER # {orderId}
        </Span>
        <Span fontSize="14px" textColor="#565959">
          {dateOrdered.toDateString()}
        </Span>
        <Span fontSize="14px" textColor="#565959" className="price">
          {<Price price={totalCost} />}
        </Span>
        <Span fontSize="14px" textColor="#007185">
          {shippingAddress}
        </Span>
        <Span className="order-details" fontSize="14px" textColor="#007185">
          <Span>{orderDetails}</Span> <Span>{invoice}</Span>
        </Span>
      </div>
    </Header>
  );
};
