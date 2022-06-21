import styled from "styled-components";
import { Button, Text } from "..";

const CartHeaderContainer = styled.div`
  border-bottom: 1px solid #b6c1d0;
  padding-bottom: 10px;
`;

export const CartHeader = () => {
  return (
    <CartHeaderContainer>
      <Text type="h1" fontSize="28px">
        Shopping Cart
      </Text>
      <Button plainText fontSize="14px">Deselect all items</Button>
    </CartHeaderContainer>
  );
};
