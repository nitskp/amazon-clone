import styled from "styled-components";
import { Text, Subtotal, Button } from "..";
import tickMark from "../../Assets/images/verify.png";

interface Props {
  freeDelivery?: boolean;
  itemsPurchased: number;
  totalAmount: number;
}

const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  .free-delivery {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Bill = ({ freeDelivery, itemsPurchased, totalAmount }: Props) => {
  return (
    <BillContainer>
      {freeDelivery && (
        <div className="free-delivery">
          <img src={tickMark} alt="Verified" />
          <Text type="p" className="free-delivery" textColor="#6AC9CA">
            Your item is eligible for free delivery
          </Text>
        </div>
      )}
      <Subtotal
        totalPrice={totalAmount}
        noOfItems={itemsPurchased}
        centerAlign
      />
      <Button secondary large>
        Proceed to buy
      </Button>
    </BillContainer>
  );
};
