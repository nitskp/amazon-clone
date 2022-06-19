import styled from "styled-components";
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

const CategoryCardContainer = styled.div``;

const ImageContainer = styled.div<ImageProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    object-fit: contain;
    width: 100%;
    ${({ oneImage }) => oneImage && "grid-column: 1 / span 2;"}
  }
`;

export const CategoryCard = ({ heading, imgs }: Props) => {
  return (
    <CategoryCardContainer>
      <Text type="h2">{heading}</Text>
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
