import styled from "styled-components";
import { Text, Button, OrderDescription, OrderDescriptionProps } from "..";

interface Props {
  returnDate: Date;
  orders: OrderDescriptionProps[];
}

const OrderContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  .info {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .buttons {
    width: 30%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    button {
      margin-bottom: 20px;
    }
  }
`;

export const Order = ({ returnDate, orders }: Props) => {
  return (
    <OrderContainer>
      <div className="info">
        <Text type="h2">Delivered {returnDate.toDateString()}</Text>
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
  );
};
