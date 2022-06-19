import styled from "styled-components";
import { Bill, Carousel, CartHeader, ItemCard, Navbar } from "../../Components";
import { GlobalStyles } from "../../Components/GlobalStyles";
import sampleItem from "../../Assets/images/sampleItem.jpg";
import amazonBackground from "../../Assets/images/amazonBackground.jpg";
import amazonBackground2 from "../../Assets/images/amazonBackground2.jpg";
import amazonBackground3 from "../../Assets/images/amazonBackground3.jpg";

const Container = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  background: #eaeded;
  height: fit-content;
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  top: 270px;
  width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
        <Carousel
          imgUrls={[amazonBackground, amazonBackground2, amazonBackground3]}
        />
        {/* need all these items from api including the image  */}
        <ItemsGrid>
          <ItemCard
            itemImg={sampleItem}
            itemTitle={"Vega Crux Black Helmet-M"}
            price={1358}
            discountInPercent={10}
            avgReview={4.5}
            noOfReviews={124355}
          />
          <ItemCard
            itemImg={sampleItem}
            itemTitle={"Vega Crux Black Helmet-M"}
            price={1358}
            discountInPercent={10}
            avgReview={4.5}
            noOfReviews={124355}
          />
          <ItemCard
            itemImg={sampleItem}
            itemTitle={"Vega Crux Black Helmet-M"}
            price={1358}
            discountInPercent={10}
            avgReview={4.5}
            noOfReviews={124355}
          />
          <ItemCard
            itemImg={sampleItem}
            itemTitle={"Vega Crux Black Helmet-M"}
            price={1358}
            discountInPercent={10}
            avgReview={4.5}
            noOfReviews={124355}
          />
          <ItemCard
            itemImg={sampleItem}
            itemTitle={"Vega Crux Black Helmet-M"}
            price={1358}
            discountInPercent={10}
            avgReview={4.5}
            noOfReviews={124355}
          />
          <ItemCard
            itemImg={sampleItem}
            itemTitle={"Vega Crux Black Helmet-M"}
            price={1358}
            discountInPercent={10}
            avgReview={4.5}
            noOfReviews={124355}
          />
          <ItemCard
            itemImg={sampleItem}
            itemTitle={"Vega Crux Black Helmet-M"}
            price={1358}
            discountInPercent={10}
            avgReview={4.5}
            noOfReviews={124355}
          />
          <ItemCard
            itemImg={sampleItem}
            itemTitle={"Vega Crux Black Helmet-M"}
            price={1358}
            discountInPercent={10}
            avgReview={4.5}
            noOfReviews={124355}
          />
        </ItemsGrid>
      </Container>
    </>
  );
}

export default App;
