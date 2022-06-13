import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

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
`;

// calculating stars in review
const Review = ({ avgReview }: { avgReview: number }) => {
  const noOfFullStars = Math.floor(avgReview);
  const halfStar = Math.floor(avgReview + 0.5) - noOfFullStars;
  const FullStars = [];
  for (let i = noOfFullStars; i > 0; i--) {
    FullStars.push(<BsStarFill color="#E88520" />);
  }

  return (
    <>
      {FullStars} {halfStar ? <BsStarHalf color="#e88520" /> : <></>}{" "}
    </>
  );
};
const ItemCard = ({
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
      <div className="item__discount-price">
        {Math.floor(discountedPrice(price, discountInPercent))}
      </div>
      <div className="item__price">{price}</div>
      <div className="item__title">{itemTitle}</div>
      <div className="item__review">
        <div className="review__stars">
          {avgReview ? <Review avgReview={avgReview} /> : <>No review yet</>}
        </div>
        <div className="review__noOfReview">{noOfReviews && noOfReviews}</div>
      </div>
    </ItemCardContainer>
  );
};

export default ItemCard;
