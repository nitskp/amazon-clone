import styled from "styled-components";
import { Bill, CartHeader, ItemCard, Navbar } from "../../Components";
import { GlobalStyles } from "../../Components/GlobalStyles";
import amazonBg from "../../Assets/images/amazonBackground3.jpg";
import sampleItem from "../../Assets/images/sampleItem.jpg";

const Container = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  background: #eaeded;
  height: fit-content;
  .background {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: contain;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
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
        <img src={amazonBg} alt="Amazon" className="background" />
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
