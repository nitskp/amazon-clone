import styled from "styled-components";
import { Text, Price } from "..";

interface Props {
  noOfItems: number;
  totalPrice: number;
  centerAlign?: boolean;
}

interface StyleProps {
  centerAlign?: boolean;
}

const SubtotalContainer = styled.div<StyleProps>`
  h3 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 400;
    ${({ centerAlign }) => centerAlign && `justify-content: center;`}
    p {
      margin-left: 23px;
    }
  }
`;

export const Subtotal = ({ noOfItems, totalPrice, centerAlign }: Props) => {
  const itemOrItems: string = noOfItems > 1 ? "items" : "item";
  return (
    <SubtotalContainer className="sub-total" centerAlign={centerAlign}>
      <Text type="h3" fontSize="18px">
        {`Subtotal (${noOfItems} ${itemOrItems}):`} <Price price={totalPrice} />
      </Text>
    </SubtotalContainer>
  );
};
