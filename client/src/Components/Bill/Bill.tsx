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
  background: white;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 1040px) {
    width: 100%;
    margin-top: -20px;
    margin-bottom: 40px;
  }

  .free-delivery {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    margin-bottom: 30px;
    img {
      width: 18px;
      height: 18px;
    }
    p {
      margin-bottom: 0;
    }
  }
  button {
    margin-top: 20px;
  }
`;

export const Bill = ({ freeDelivery, itemsPurchased, totalAmount }: Props) => {
  return (
    <BillContainer>
      {freeDelivery && (
        <div className="free-delivery">
          <img src={tickMark} alt="Verified" />
          <Text
            type="p"
            className="free-delivery"
            textColor="#6AC9CA"
            fontSize="12px"
          >
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
