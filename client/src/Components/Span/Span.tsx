import styled, { css } from "styled-components";
import { CommonProps, CommonStyles } from "../CommonProps";

interface Props extends CommonProps {
  bold?: boolean;
  italics?: boolean;
}

const StyledSpan = styled.span<Props>`
  ${(props) => props.bold && `font-weight:700;`}
  ${(props) => props.italics && `font-style:italic;`}
// need to understand the syntax below clearly
  ${(props) => css`
    ${CommonStyles}
  `}
`;

export function Span(props: Props) {
  const { children } = props;
  return <StyledSpan {...props}>{children}</StyledSpan>;
}
