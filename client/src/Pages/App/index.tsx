import styled from "styled-components";
import { Carousel, CategoryCard, Footer, Navbar } from "../../Components";
import { GlobalStyles } from "../../Components/GlobalStyles";
import sampleItem from "../../Assets/images/sampleItem.jpg";
import amazonBackground from "../../Assets/images/amazonBackground.jpg";
import amazonBackground2 from "../../Assets/images/amazonBackground2.jpg";
import amazonBackground3 from "../../Assets/images/amazonBackground3.jpg";
import sampeCategory from "../../Assets/images/sampleCategory.jpeg";

const Container = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
  background: #eaeded;
  height: fit-content;
  /* padding-top: 270px; */
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 270px;
  position: relative;
  width: 90%;
  margin: 0 auto;
  gap: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
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
          <CategoryCard
            heading="Category Heading"
            imgs={[
              {
                caption: "Sample Categories",
                imgUrl: sampeCategory,
              },
            ]}
          />
          <CategoryCard
            heading="Category Heading"
            imgs={[
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
            ]}
          />
          <CategoryCard
            heading="Category Heading"
            imgs={[
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
            ]}
          />
          <CategoryCard
            heading="Category Heading"
            imgs={[
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
            ]}
          />
          <CategoryCard
            heading="Category Heading"
            imgs={[
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
            ]}
          />
          <CategoryCard
            heading="Category Heading"
            imgs={[
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
            ]}
          />
          <CategoryCard
            heading="Category Heading"
            imgs={[
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
            ]}
          />
          <CategoryCard
            heading="Category Heading"
            imgs={[
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
              {
                caption: "Sample Categories",
                imgUrl: sampleItem,
              },
            ]}
          />
        </ItemsGrid>
      </Container>
      <Footer />
    </>
  );
}

export default App;
