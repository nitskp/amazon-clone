import styled from "styled-components";
import {
  Text,
  Button,
  OrderDescription,
  OrderDescriptionProps,
  OrderHeader,
} from "..";

interface Props {
  deliveredDate: Date;
  orders: OrderDescriptionProps[];
}

const OrderHeaderSampleData = {
  orderId: "10820280243",
  dateOrdered: new Date(Date.now()),
  totalCost: 12243,
  shippingAddress: "toot-tip containing address",
  orderDetails: "need to place link with order-details",
  invoice: "sample invoice url",
};

const OrderContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  height: fit-content;
  margin-bottom: 20px;
  border: 1px solid #c6c9c9;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media screen and (max-width: 712px) {
    flex-direction: column;
  }
  .order-info {
    width: 70%;
    height: fit-content;
    @media screen and (max-width: 712px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }
  }
  .buttons {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 712px) {
      width: 100%;
    }
    button {
      margin-bottom: 20px;
    }
  }
`;

export const Order = ({ deliveredDate, orders }: Props) => {
  return (
    <>
      <OrderHeader {...OrderHeaderSampleData} />
      <OrderContainer>
        <div className="order-info">
          <Text type="h2" fontSize="18px">
            Delivered {deliveredDate.toDateString()}
          </Text>
          {orders.map((order, index) => (
            <OrderDescription
              key={order.title + index}
              imageUrl={order.imageUrl}
              returnDate={order.returnDate}
              title={order.title}
            />
          ))}
        </div>
        <div className="buttons">
          <Button white large>
            Track Package
          </Button>
          <Button white large>
            Leave Seller Feedback
          </Button>
          <Button white large>
            Leave Delivery Feedback
          </Button>
          <Button white large>
            Write a product review
          </Button>
        </div>
      </OrderContainer>
    </>
  );
};
