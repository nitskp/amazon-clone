import styled from "styled-components";
import {
  Navbar,
  Footer,
  Text,
  Searchbar,
  Span,
  Select,
  Order,
} from "../../Components";
import { GlobalStyles } from "../../Components/GlobalStyles";
import sampleItem from "../../Assets/images/sampleItem.jpg";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.main`
  max-width: 915px;
  width: 90vw;
  margin: 0 auto;
  h1 {
    width: 50%;
  }
  .sub-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 26px auto;
    @media screen and (max-width: 463px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
  .filter {
    margin-bottom: 20px;
  }
  select {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px 0 10px 10px;
    margin-left: 8px;
  }
`;

const Orders = () => {
  const noOfOrders = 1;
  const filters = ["last 30 Days", "past 3 months", "2022", "2021"];
  return (
    <Wrapper>
      <GlobalStyles />
      <Navbar />
      <Container>
        <div className="sub-header">
          <Text type="h1" fontSize="28px">
            Your Orders
          </Text>

          <Searchbar iconInside />
        </div>
        <div className="orders">
          <div className="filter">
            <Span bold>
              {noOfOrders + " " + (noOfOrders > 1 ? "orders" : "order")}
            </Span>{" "}
            placed in <Select name="filter" items={filters}></Select>
          </div>
        </div>
        <Order
          orders={[
            {
              imageUrl: sampleItem,
              returnDate: new Date("2022-06-22T09:29:46.612Z"),
              title: "Sample Item",
            },
            {
              imageUrl: sampleItem,
              returnDate: new Date("2022-06-22T09:29:46.612Z"),
              title: "Sample Item",
            },
            {
              imageUrl: sampleItem,
              returnDate: new Date("2022-06-22T09:29:46.612Z"),
              title: "Sample Item",
            },
          ]}
          deliveredDate={new Date(Date.now())}
        />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Orders;
