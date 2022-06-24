import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Span } from "..";

export const Review = ({ avgReview }: { avgReview: number }) => {
  const noOfFullStars = Math.floor(avgReview);
  const halfStar = Math.floor(avgReview + 0.5) - noOfFullStars;
  const Stars = [];
  // adding full stars
  for (let i = noOfFullStars; i > 0; i--) {
    Stars.push(<BsStarFill key={"full-star-" + i} color="#E88520" />);
  }
  // adding half star
  halfStar ? (
    Stars.push(<BsStarHalf color="#e88520" key={"half-star-1"} />)
  ) : (
    <></>
  );

  //adding empty stars
  for (let i = 5 - noOfFullStars; i > 0; i--) {
    Stars.push(<BsStar key={`empty-star-${i}`} color="#E88520" />);
  }

  return <Span fontSize="16px">{Stars}</Span>;
};
