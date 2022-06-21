import styled from "styled-components";

interface Props {
  items: string[] | number[];
  name: string;
  addOnText?: string;
}

const StyledSelect = styled.select`
  background: #dbdada;
  border: #c3c1c1 1px solid;
  border-radius: 10px;
  font-size: 13px;
  padding: 11px 10px;
  outline: none;
  border: none;
  :hover {
    filter: brightness(106%);
  }
`;

export const Select = ({ items, name, addOnText }: Props) => {
  return (
    <StyledSelect name={name}>
      {items.map((item) => (
        <option value={item}>
          {addOnText ? addOnText + " " + item : item}
        </option>
      ))}
    </StyledSelect>
  );
};
