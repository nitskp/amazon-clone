import styled from "styled-components";
import { Text } from "..";

interface Props {
  imgUrl: string;
  text: string;
}

const Container = styled.div`
  padding: 0 10px;
  max-width: 300px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const ImageWithText = ({ imgUrl, text }: Props) => {
  return (
    <Container className="img-with-text">
      <img src={imgUrl} alt="Categories or Item" />
      <Text type="p" fontSize="12px">
        {text}
      </Text>
    </Container>
  );
};
