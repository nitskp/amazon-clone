import styled from "styled-components";
import { Footer, ItemCard, Navbar, Text } from "../../Components";
import { GlobalStyles } from "../../Components/GlobalStyles";
import sampleItem from "../../Assets/images/sampleItem.webp";

const Wrapper = styled.div`
  overflow-x: hidden;
`;
const Container = styled.main`
  max-width: 1600px;
  width: 90vw;
  margin: 0 auto;
  .heading {
    padding: 10px 15px;
    margin-top: 40px;
    h1 {
      font-weight: 400;
    }
  }
`;
const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
  margin: 20px auto;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const SAMPLE_ITEMS = [
  {
    avgReview: 3.2,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 3.2,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 4.2,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 5,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 2.6,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 3.2,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 3.2,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 3.2,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 3.2,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
  {
    avgReview: 3.2,
    discountInPercent: 10,
    itemImg: sampleItem,
    itemTitle: "Sample Item",
    noOfReviews: 13234,
    price: 2112,
  },
];

const Items = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Navbar />
      <Container>
        <div className="heading">
          <Text type="h1" fontSize="20px" textColor="#0F1111">
            {" "}
            Results
          </Text>
          <Text type="p" fontSize="14px" textColor="#565959">
            Price and other details may vary based on product size and colour.
          </Text>
        </div>
        <ItemsGrid>
          {SAMPLE_ITEMS.map((item, index) => (
            // Item will have onClick on image and it will navigate to itemHeroPage.
            <ItemCard
              avgReview={item.avgReview}
              discountInPercent={item.discountInPercent}
              itemImg={item.itemImg}
              itemTitle={item.itemTitle}
              noOfReviews={item.noOfReviews}
              price={item.price}
              key={item.itemTitle + index}
            />
          ))}
        </ItemsGrid>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Items;
