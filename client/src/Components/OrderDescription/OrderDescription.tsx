import styled from "styled-components";
import { Button, Text, Span } from "..";
import { BsArrowRepeat } from "react-icons/bs";

export interface OrderDescriptionProps {
  imageUrl: string;
  title: string;
  returnDate: Date;
}

const OrderDescriptionConatiner = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .info {
    width: fit-content;
  }
  .image-container {
    max-width: 100px;
    max-height: 100px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  button > span {
    margin-left: 10px;
  }
`;

export const OrderDescription = ({
  imageUrl,
  title,
  returnDate,
}: OrderDescriptionProps) => {
  return (
    <OrderDescriptionConatiner>
      <div className="image-container">
        <img src={imageUrl} alt="Sample Item" />
      </div>
      <div className="info">
        <Text type="h3">{title}</Text>
        <Text type="p">
          Return window closes on{" "}
          {/* need to create a function for removing days  */}
          {returnDate.toDateString().replace("Fri ", "")}{" "}
        </Text>
        <Button secondary>
          <BsArrowRepeat fontSize={20} /> <Span>Buy It Again</Span>
        </Button>
      </div>
    </OrderDescriptionConatiner>
  );
};
