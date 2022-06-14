import styled from "styled-components";

interface Props {
  imgUrl: string;
}

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
`;

export const Brand = ({ imgUrl }: Props) => {
  return (
    <BrandContainer>
      <img src={imgUrl} alt="Brand" />
    </BrandContainer>
  );
};

// export default Brand;
