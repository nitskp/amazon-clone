import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import styled, { css } from "styled-components";
import { Button, Input } from "..";

interface Inputs {
  searchItem: string;
}

interface Props {
  iconInside?: boolean;
}

const SearchBar = styled.div<Props>`
  display: flex;
  border-radius: 10px;

  form {
    display: flex;
    position: relative;
  }
  .search-icon {
    position: absolute;
    top: 7px;
    left: 6px;
  }
  .input-container {
    margin-bottom: 0;
  }
  input {
    height: 50px;
    width: calc(80vw - 441px);
    min-width: 200px;
    /* padding: 10px; */
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: white solid 2px;
    ${({ iconInside }) =>
      iconInside &&
      css`
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        border: none;
        border-radius: 6px;
        margin-right: 20px;
      `}
    :hover {
      border: #f3bc69 solid 2px;
      ${({ iconInside }) =>
        iconInside &&
        css`
          box-shadow: inset 0 0 3px;
          border: none;
        `}
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

    button {
      padding: 0;
      margin: 0;
      width: fit-content;
      min-width: 0;
      min-height: 0;
      color: black;
    }
  }

  .search-icon {
  }
`;

export const Searchbar = ({ iconInside }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <SearchBar iconInside={iconInside} className="search-bar">
      <form onSubmit={handleSubmit(onSubmit)}>
        {iconInside && (
          <AiOutlineSearch className="search-icon" fontSize={20} />
        )}
        <Input type="text" register={register} name={"searchItem"} />

        {iconInside ? (
          <Button type="submit" black>
            Search Orders
          </Button>
        ) : (
          <div className="icon-container">
            <Button type="submit" plainText>
              <AiOutlineSearch fontSize={20} />
            </Button>
          </div>
        )}
      </form>
    </SearchBar>
  );
};
