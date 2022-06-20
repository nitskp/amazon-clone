import styled, { css } from "styled-components";
import { Text, ImageWithText, Button } from "..";

interface Props {
  heading: string;
  imgs: {
    imgUrl: string;
    caption: string;
  }[];
}

interface ImageProps {
  oneImage?: boolean;
}

const CategoryCardContainer = styled.div`
  background: white;
  border-radius: 2px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  button {
    justify-content: flex-start;
    padding-left: 10px;
  }
  h2 {
    text-align: center;
  }
`;

const ImageContainer = styled.div<ImageProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .img-with-text {
    object-fit: contain;
    width: 100%;
    ${({ oneImage }) =>
      oneImage &&
      css`
        grid-column: 1 / span 2;
      `}
  }
`;

export const CategoryCard = ({ heading, imgs }: Props) => {
  return (
    <CategoryCardContainer>
      <Text type="h2" fontSize="21px" textColor="#0f1111">
        {heading}
      </Text>
      <ImageContainer oneImage={imgs.length === 1}>
        {imgs.map((img, index) => (
          <ImageWithText
            imgUrl={img.imgUrl}
            text={img.caption}
            key={img.caption + index}
          />
        ))}
      </ImageContainer>
      <Button plainText>Shop now</Button>
    </CategoryCardContainer>
  );
};
