import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  imgUrl: string;
}

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
`;

export const Brand = ({ imgUrl }: Props) => {
  const nav = useNavigate();
  return (
    <BrandContainer onClick={() => nav("/")}>
      <img src={imgUrl} alt="Brand" />
    </BrandContainer>
  );
};

// export default Brand;
