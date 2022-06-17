import styled, { css } from "styled-components";
import { CommonProps, CommonStyles } from "../CommonProps";

interface Props extends CommonProps {
  underline?: boolean;
  to: string;
}

// need to check other generics too like Omit
const A = styled.a<Partial<Props>>`
  text-decoration: none;
  color: black;
  ${(props) => props.underline && "text-decoration: underline;"}
  ${(props) => css`
    ${CommonStyles}
  `}
`;

export const Anchor = (props: Props) => {
  const { to, children } = props;
  return (
    <A href={to} {...props}>
      {children}
    </A>
  );
};
