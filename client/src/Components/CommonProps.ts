import { css } from "styled-components";

export interface CommonProps {
  color?: string;
  fontSize?: string;
  children?: any;
}

export const CommonStyles = css<CommonProps>`
  ${(props) => props.color && `color:${props.color};`}
  ${(props) => props.fontSize && `font-size:${props.fontSize};`}
`;
