import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

interface Props {
  imgUrls: string[];
}

interface ImgProps {
  showImg?: boolean;
}

interface IconProps {
  disable?: boolean;
}

const CarouselContainer = styled.div<IconProps>`
  position: relative;
  .icon-left {
    position: absolute;
    top: 40px;
    left: 20px;
    z-index: 999;
  }
  .icon-right {
    position: absolute;
    top: 40px;
    right: 20px;
    z-index: 999;
  }
`;

const Img = styled.img<ImgProps>`
  display: none;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: contain;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  ${(props) => props.showImg && "display: block;"}
`;

export const Carousel = ({ imgUrls }: Props) => {
  const [imgNumber, setImgNumber] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    if (imgNumber === 0) setDirection("right");
    if (imgNumber === 2) setDirection("left");

    const intervalId = setInterval(() => {
      if (direction === "left") moveLeft(imgNumber);
      if (direction === "right") moveRight(imgNumber);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imgNumber, direction]);

  const moveLeft = (imgNumber: number) => {
    if (imgNumber === 0) return 0;
    imgNumber -= 1;
    setDirection("left");
    setImgNumber(imgNumber);
  };

  const moveRight = (imgNumber: number) => {
    if (imgNumber === 2) return 2;
    imgNumber += 1;
    setDirection("right");
    setImgNumber(imgNumber);
  };
  return (
    <CarouselContainer>
      <div className="icon-left" onClick={() => moveLeft(imgNumber)}>
        <AiOutlineLeft fontSize={30} fontWeight={300} />
      </div>
      {imgUrls.map((imgUrl, index) => (
        <Img
          key={imgUrl + index}
          src={imgUrl}
          alt={`img-${index}`}
          showImg={imgNumber === index}
        />
      ))}
      <div className="icon-right">
        <AiOutlineRight
          fontSize={30}
          onClick={() => moveRight(imgNumber)}
          // onClick={() => console.log("Hello World")}
          fontWeight={300}
        />
      </div>
    </CarouselContainer>
  );
};
