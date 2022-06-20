import styled from "styled-components";
import { Review, Text } from "..";

interface Props {
  itemImg: string;
  itemTitle: string;
  price: number;
  discountInPercent: number;
  avgReview?: number;
  noOfReviews?: number;
}

const ItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  .item__img {
    width: 100%;
    vertical-align: center;
    text-align: center;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .item__discount-price {
    position: relative;
    font-weight: 700;
    padding: 10px;
    font-size: 21px;
    width: fit-content;
    color: #0f1111;
    ::before {
      content: "Rs."; // need to look up the problem when using entity code. All css styling goes kboom
      position: absolute;
      top: 15px;
      left: -4px;
      font-size: 12px;
      font-weight: 400;
    }
    ::after {
      content: "00";
      position: absolute;
      top: 15px;
      right: -6px;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .item__price {
    text-decoration: line-through;
    font-size: 12px;
    color: #565959;
  }
  .item__title {
    font-size: 14px;
    color: #0f1111;
  }
  .item__review {
    color: #565959;
    font-size: 12px;
    display: flex;
  }
`;

// calculating stars in review

export const ItemCard = ({
  itemImg,
  itemTitle,
  price,
  discountInPercent,
  avgReview,
  noOfReviews,
}: Props) => {
  // calculating discounted Price
  const discountedPrice = (
    originalPrice: number,
    discountInPercent: number
  ) => {
    const discount = (originalPrice * discountInPercent) / 100;
    return originalPrice - discount;
  };

  return (
    <ItemCardContainer>
      <div className="item__img">
        <img src={itemImg} alt="Item" />
      </div>

      {/* need to add a function to add commas every three digits */}
      <Text type="p" className="item__discount-price">
        {Math.floor(discountedPrice(price, discountInPercent))}
      </Text>
      <Text type="p" className="item__price">
        {price}
      </Text>
      <Text type="h2" className="item__title">
        {itemTitle}
      </Text>
      <div className="item__review">
        <div className="review__stars">
          {avgReview ? <Review avgReview={avgReview} /> : <>No review yet</>}
        </div>
        <div className="review__noOfReview">{noOfReviews && noOfReviews}</div>
      </div>
    </ItemCardContainer>
  );
};
