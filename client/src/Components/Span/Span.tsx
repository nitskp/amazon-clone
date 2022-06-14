import styled, { css } from "styled-components";
import { CommonProps, CommonStyles } from "../CommonProps";

const StyledSpan = styled.span<CommonProps>`
  ${(props) => css`
    ${CommonStyles}
  `}
`;

export function Span(props: CommonProps) {
  const { children } = props;
  return <StyledSpan {...props}>{children}</StyledSpan>;
}
