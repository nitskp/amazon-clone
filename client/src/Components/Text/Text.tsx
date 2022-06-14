import styled, { css } from "styled-components";
import { CommonProps, CommonStyles } from "../CommonProps";

interface Props extends CommonProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

const H1 = styled.h1<CommonProps>`
  ${(props) => css`
    ${CommonStyles}
  `}
`;

const H2 = styled.h2<CommonProps>`
  ${(props) => css`
    ${CommonStyles}
  `}
`;
const H3 = styled.h3<CommonProps>`
  ${(props) => css`
    ${CommonStyles}
  `}
`;
const H4 = styled.h4<CommonProps>`
  ${(props) => css`
    ${CommonStyles}
  `}
`;
const H5 = styled.h5<CommonProps>`
  ${(props) => css`
    ${CommonStyles}
  `}
`;

const H6 = styled.h6<CommonProps>`
  ${(props) => css`
    ${CommonStyles}
  `}
`;

const P = styled.p<CommonProps>`
  ${(props) => css`
    ${CommonStyles}
  `}
`;

export const Text = (props: Props) => {
  const { type, children } = props;
  return type === "h1" ? (
    <H1 {...props}>{children}</H1>
  ) : type === "h2" ? (
    <H2 {...props}>{children}</H2>
  ) : type === "h3" ? (
    <H3 {...props}>{children}</H3>
  ) : type === "h4" ? (
    <H4 {...props}>{children}</H4>
  ) : type === "h5" ? (
    <H5 {...props}>{children}</H5>
  ) : type === "h6" ? (
    <H6 {...props}>{children}</H6>
  ) : (
    <P {...props}>{children}</P>
  );
};


