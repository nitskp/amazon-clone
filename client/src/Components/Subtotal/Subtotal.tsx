import styled from "styled-components";
import { Text, Price } from "..";

interface Props {
  noOfItems: number;
  totalPrice: number;
}

const SubtotalContainer = styled.div`
  h3 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 400;
    p {
      margin-left: 23px;
    }
  }
`;

export const Subtotal = ({ noOfItems, totalPrice }: Props) => {
  const itemOrItems: string = noOfItems > 1 ? "items" : "item";
  return (
    <SubtotalContainer>
      <Text type="h3">
        {`Subtotal (${noOfItems} ${itemOrItems}):`} <Price price={totalPrice} />
      </Text>
    </SubtotalContainer>
  );
};
