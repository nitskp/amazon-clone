import styled from "styled-components";
import { CartCard, Footer, Navbar, Bill } from "../../Components";
import { GlobalStyles } from "../../Components/GlobalStyles";

const Wrapper = styled.div`
  overflow-x: hidden;
  background: #eaeded;
`;

const Container = styled.main`
  max-width: 1600px;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  @media screen and (max-width: 1040px) {
    flex-direction: column;
  }
`;

const Cart = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Navbar />
      <Container>
        <CartCard />
        <Bill freeDelivery itemsPurchased={2} totalAmount={11448} />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Cart;
