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
  silver?: boolean;
  icon?: boolean;
  large?: boolean;
  orange?: boolean;
  roundBorder?: boolean;
  // need to check this part
  onClick?: () => void;
}

// still incomplete
const StyledButton = styled.button<Props>`
  min-height: 29px;
  min-width: 90px;
  font-size: 13px;
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: #0f1111;
  :hover {
    filter: brightness(106%);
  }
  ${(props) =>
    props.primary &&
    css`
      background: linear-gradient(#fee6b0, #eeba37);
      border-color: #be952c #a68226 #9b7924;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: #fad814;
      border-color: #fad814;
    `}
    ${(props) =>
    props.white &&
    css`
      background: white;
      border-color: white;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      :hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    `}
    ${(props) =>
    props.plainText &&
    css`
      background: transparent;
      border: transparent;
      color: #3a788a;
      padding: 0;
    `}
    ${(props) =>
    props.black &&
    css`
      background: #2f3333;
      border-radius: 35px;
      color: white;
    `}
    ${(props) =>
    props.red &&
    css`
      background: tomato;
      border-color: tomato;
    `}
    ${(props) =>
    props.icon &&
    css`
      background: #fad814;
      border-color: #fad814;
      justify-content: space-evenly;
    `}
    ${(props) =>
    props.orange &&
    css`
      background: #ea860e;
      border-color: #ea860e;
    `}
    ${(props) =>
    props.large &&
    css`
      min-width: 200px;
      width: 100%;
    `}
    ${(props) =>
    props.silver &&
    css`
    linear-gradient(to bottom,#f7f8fa,#e7e9ec);
    border-color: #d5d5d5;
    `}
    ${(props) =>
    props.roundBorder &&
    css`
      border-radius: 35px;
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
