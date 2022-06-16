import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { Button, Input } from "..";

interface Inputs {
  searchItem: string;
}

const SearchBar = styled.div`
  display: flex;
  border-radius: 10px;
  form {
    display: flex;
  }
  input {
    width: calc(80vw - 441px);
    min-width: 200px;
    padding: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: white solid 2px;
    :hover {
      border: #f3bc69 solid 2px;
    }
    outline: none;
  }

  .icon-container {
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3bc69;
    padding: 10px;
    button{
        padding: 0;
        margin: 0;
        width: fit-content;
        min-width: 0;
        min-height: 0;
        color: black;
    }
  }
`;

export const Searchbar = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <SearchBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" register={register} name={"searchItem"} />
        <div className="icon-container">
          <Button type="submit" plainText>
            <AiOutlineSearch fontSize={20} />
          </Button>
        </div>
      </form>
    </SearchBar>
  );
};
