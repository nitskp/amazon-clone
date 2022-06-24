import styled from "styled-components";
import {
  Button,
  Footer,
  ImageGallery,
  Navbar,
  Price,
  Review,
  Span,
  Text,
} from "../../Components";
import { GlobalStyles } from "../../Components/GlobalStyles";
import sampleItem1 from "../../Assets/images/sampleItem.webp";
import sampleItem2 from "../../Assets/images/sampleItem.jpg";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.main`
  max-width: 1600px;
  width: 90vw;
  margin: 30px auto;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 910px) {
    flex-direction: column;
  }
  .review {
    display: flex;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #888c8c;
  }
  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 10px;
    justify-items: flex-start;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #888c8c;
  }
  .cost {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #888c8c;
    span {
      min-width: 80px;
    }
    .p {
      display: flex;
      gap: 14px;
      align-items: center;
      .line-through {
        text-decoration: line-through;
        ::before {
          top: 2px;
        }
      }
      p {
        margin-left: 20px;
      }
    }
  }
  .button-info-container {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 910px) {
      flex-direction: column-reverse;
    }
  }

  .about-item {
    padding: 10px 20px;
    h3 {
      margin-bottom: 10px;
    }
    li {
      margin-bottom: 6px;
    }
  }
  .button-container {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    @media screen  and (max-width: 910px){
      justify-content: center;
    }
    button {
      padding: 8px 12px;
      font-size: 14px;
      min-width: 120px;
    }
  }
`;

const ItemHeroPage = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Navbar />
      <Container>
        <ImageGallery
          imgs={[sampleItem1, sampleItem2, sampleItem1, sampleItem2]}
        />
        <div className="button-info-container">
          <div className="item-info">
            <Text type="h1" fontSize="24px">
              Item Title here
            </Text>
            <div className="review">
              <Review avgReview={3.6} />
              <Span textColor="#007185" fontSize="14px">
                {163104} ratings
              </Span>
            </div>
            <div className="cost">
              <Text type="p" textColor="#565959" fontSize="14px" className="p">
                <Span>M.R.P.: </Span>

                <Price
                  price={22131}
                  textColor="#565959"
                  fontSize="14px"
                  className="line-through"
                />
              </Text>
              <Text type="p" textColor="#565959" fontSize="14px" className="p">
                <Span>Deal Price: </Span>

                <Price price={21131} textColor="#b12704" fontSize="18px" />
              </Text>

              <Text type="p" textColor="#565959" fontSize="14px" className="p">
                <Span>You Save: </Span>

                <Price price={1000} textColor="#b12704" fontSize="18px" />
              </Text>
            </div>
            <div className="details">
              <Span bold>Model Name</Span>
              <Span>Redmi 9 Activ</Span>

              <Span bold>Network Service Provider</Span>
              <Span>Unlocked for All Carriers</Span>

              <Span bold>Brand</Span>
              <Span>Redmi</Span>

              <Span bold>Form factor</Span>
              <Span>Bar</Span>

              <Span bold>Memory Storage Capacity</Span>
              <Span>64 GB</Span>
            </div>
            <div className="about-item">
              <Text type="h3" fontSize="16px" textColor="#0f1111">
                About this item
              </Text>
              <ul>
                <li>
                  Processor: Octa-core Helio G35 and upto 2.3GHz clock speed
                </li>
                <li>
                  Camera: 13+2 MP Dual Rear camera with AI portrait| 5 MP front
                  camera
                </li>
                <li>
                  Display: 16.58 centimeters (6.53-inch) HD+ display with
                  720x1600 pixels and 20:9 aspect ratio
                </li>
                <li>
                  Battery: 5000 mAH large battery with 10W wired charger in-box
                </li>
                <li>
                  Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual SIM
                  (nano+nano) + Dedicated SD card slot
                </li>
              </ul>
            </div>
          </div>
          <div className="button-container">
            <Button roundBorder secondary>
              Add to cart
            </Button>
            <Button roundBorder orange>
              Buy now
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default ItemHeroPage;
