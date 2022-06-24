import { useState } from "react";
import styled from "styled-components";

interface Props {
  imgs: string[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  max-width: 535px;
  margin: 0 auto;
  width: 100%;

  .main-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;
    border-radius: 15px;
    height: 411px;
    img {
      width: 100%;
      height: auto;
      max-height: 411px;
      object-fit: contain;
    }
  }
  .bottom-imgs {
    display: flex;
    gap: 15px;

    .img-container {
      cursor: pointer;
      width: 122px;
      height: 122px;
      border: 1px solid #888c8c;
      border-radius: 10px;
      padding: 1px 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 548px) {
        width: 100px;
        height: 100px;
      }
      @media screen and (max-width: 474px) {
        width: 80px;
        height: 80px;
      }
      @media screen and (max-width: 375px) {
        width: 65px;
        height: 65px;
      }
      :hover {
        box-shadow: #94ecfa 0px 1px 2px 0px, #ddf8fc 0px 2px 6px 2px;
      }
      img {
        max-width: 122px;
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export const ImageGallery = ({ imgs }: Props) => {
  const [mainImgIndex, setMainImgIndex] = useState(0);
  return (
    <Container>
      <div className="main-img">
        <img src={imgs[mainImgIndex]} alt="main" />
      </div>
      <div className="bottom-imgs">
        {imgs.map((imgSrc, index) => (
          <div
            className="img-container"
            onMouseOver={() => setMainImgIndex(index)}
          >
            <img src={imgSrc} alt="bottom-img-1" key={imgSrc + index} />
          </div>
        ))}
      </div>
    </Container>
  );
};
