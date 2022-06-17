import { css } from "styled-components";

export interface CommonProps {
  textColor?: string;
  fontSize?: string;
  children?: any;
  className?: string;
}

export const CommonStyles = css<CommonProps>`
  ${(props) => props.textColor && `color:${props.textColor};`}
  ${(props) => props.fontSize && `font-size:${props.fontSize};`}
`;
