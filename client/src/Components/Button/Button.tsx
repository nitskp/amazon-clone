import React from "react";
import styled, { css } from "styled-components";
import { CommonProps, CommonStyles } from "../CommonProps";

interface Props extends CommonProps {
  type?: "submit" | "button";
  primary?: boolean;
  secondary?: boolean;
  white?: boolean;
  plainText?: boolean;
  black?: boolean;
  red?: boolean;
  icon?: React.ReactNode;
  large?: boolean;
  // need to check this part
  onClick?: () => void;
}

const StyledButton = styled.button<Props>`
  min-height: 29px;
  min-width: 90px;
  font-size: 13px;
  padding: 0 10px;
  border-radius: 3px;
  color: #0f1111;
  :hover {
    filter: brightness(130%);
  }
  ${(props) =>
    props.primary &&
    css`
      background: linear-gradient(#fee6b0, #eeba37);
      border-color: #be952c #a68226 #9b7924;
    `}
  ${(props) => css`
    ${CommonStyles}
  `}
`;

export function Button(props: Props) {
  const { children, type, onClick } = props;
  return type === "submit" ? (
    <StyledButton type="submit" onClick={() => onClick} {...props}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  );
}
