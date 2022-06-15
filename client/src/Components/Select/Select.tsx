import styled from "styled-components";

interface Props {
  items: string[];
  name: string;
}

const StyledSelect = styled.select`
  :hover {
    filter: brightness(106%);
  }
`;

export const Select = ({ items, name }: Props) => {
  return (
    <StyledSelect name={name}>
      {items.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </StyledSelect>
  );
};
