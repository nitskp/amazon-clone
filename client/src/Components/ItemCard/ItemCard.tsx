import styled from "styled-components";
import { Review, Text, Price } from "..";

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
  gap: 10px;
  width: 100%;
  padding: 10px;
  max-width: 280px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  .item__img {
    width: 100%;
    vertical-align: center;
    text-align: center;
    margin-bottom: 10px;
    :hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
    img {
      width: 100%;
      object-fit: contain;
      border-bottom: 1px soild #565959;
      max-width: 160px;
      margin: 0 auto;
    }
  }

  .price {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    margin-left: 20px;
    gap: 10px;
  }

  .item__price {
    text-decoration: line-through;
    font-size: 12px;
    color: #565959;
    /* margin-left: 20px; */
  }

  .item__review {
    color: #565959;
    font-size: 12px;
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
    }
    .review__no-of-review {
      color: #007185;
      font-size: 14px;
    }
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
      <Text type="h2" fontSize="16px" textColor="#0f1111">
        {itemTitle}
      </Text>
      <div className="item__review">
        <div className="review__stars">
          {avgReview ? <Review avgReview={avgReview} /> : <>No review yet</>}
        </div>
        <div className="review__no-of-review">{noOfReviews && noOfReviews}</div>
      </div>
      {/* need to add a function to add commas every three digits */}
      <div className="price">
        <Text type="p" fontSize="14px">{"(" + discountInPercent + "%) off"}</Text>
        <Text type="p" className="item__price">
          {price}
        </Text>
        <Price
          price={Math.floor(discountedPrice(price, discountInPercent))}
          textColor="#b12704"
        />
      </div>
    </ItemCardContainer>
  );
};
