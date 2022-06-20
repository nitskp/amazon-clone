import styled from "styled-components";
import { Span } from "..";

interface Props {
  text: string;
}

const Heading = styled.h5`
  width: 100%;
  text-align: center;
  border-bottom: solid 1px #767676;
  line-height: 0.1em;
  color: #767676;
  font-size: 12px;

  span {
    background: #ffffff;
    padding: 0 10px;
    color: #767676;
    font-size: 12px;
  }
`;

export const TextBetweenLine = ({ text }: Props) => {
  return (
    <>
      <Heading>
        <Span>{text}</Span>
      </Heading>
    </>
  );
};
