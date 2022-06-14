import { UseFormRegister, Path } from "react-hook-form";
import styled from "styled-components";

interface Props {
  type: "tel" | "text" | "email" | "password";
  // need to learn how to get types dynamically
  register: UseFormRegister<any>;
  name: Path<any>;
}

const StyledInput = styled.input``;

export const Input = ({ type, register, name }: Props) => {
  return <StyledInput type={type} {...register(name)} />;
};
