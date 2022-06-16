import styled from "styled-components";
import { Button, Text } from "..";

const CartHeaderContainer = styled.div``;

export const CartHeader = () => {
  return (
    <CartHeaderContainer>
      <Text type="h1">Shopping Cart</Text>
      <Button plainText>Deselect all items</Button>
    </CartHeaderContainer>
  );
};
