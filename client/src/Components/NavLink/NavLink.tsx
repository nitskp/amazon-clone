import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface Props {
  to: string;
  smallText: string;
  mainText: string;
  icon?: React.ReactNode;
  color?: string;
}

interface StyledProps {
  cart?: boolean;
  color?: string;
}

const Item = styled(NavLink)<StyledProps>`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  position: relative;
  span {
    font-size: 12px;
  }

  ${({ color }) => color && `color: ${color};`}

  ${({ cart }) =>
    cart &&
    css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      position: relative;
      margin-right: 0;
      span {
        position: absolute;
        top: 7px;
        left: 19px;
        font-size: 15px;
        color: #f3bc69;
        font-weight: 700;
      }
    `}
`;

export const TheNavLink = ({ to, mainText, smallText, icon, color }: Props) => {
  return (
    // !! to conver icon to boolean type
    <Item to={to} cart={!!icon} color={color}>
      {icon}
      <span>{smallText}</span>
      {mainText}
    </Item>
  );
};
