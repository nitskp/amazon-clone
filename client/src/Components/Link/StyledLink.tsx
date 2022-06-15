import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { CommonProps, CommonStyles } from "../CommonProps";

interface Props extends CommonProps {
  underline?: boolean;
  to: string;
}

// need to check other generics too like Omit
const TheLink = styled(Link)<Partial<Props>>`
  text-decoration: none;
  color: black;
  ${(props) => props.underline && "text-decoration: underline;"}
  ${(props) => css`
    ${CommonStyles}
  `}
`;

export const StyledLink = (props: Props) => {
  const { children, to } = props;
  return <TheLink to={to}>{children}</TheLink>;
};
