import { UseFormRegister, Path } from "react-hook-form";
import styled from "styled-components";

interface Props {
  type: "tel" | "text" | "email" | "password";
  // need to learn how to get types dynamically
  register: UseFormRegister<any>;
  name: Path<any>;
  label?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  padding: 3px 7px;
`;
const StyledLabel = styled.label`
  font-size: 13px;
  color: #111111;
  font-weight: 700;
`;

export const Input = ({ type, register, name, label }: Props) => {
  return (
    <Container className="input-container">
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput id={name} type={type} {...register(name)} />
    </Container>
  );
};
