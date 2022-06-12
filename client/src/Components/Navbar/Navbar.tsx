import styled from "styled-components";
import amazonLogo from "../../Assets/images/Amazon_logo.svg.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 10px 20px;
  background: #0f1111;

  .cart {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: relative;
    margin-right: 0;
    .order-number {
      position: absolute;
      top: 7px;
      left: 19px;
      font-size: 15px;
      color: #f3bc69;
      font-weight: 700;
    }
  }
`;
const Brand = styled.div`
  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
`;
const SearchBar = styled.div`
  display: flex;
  border-radius: 10px;
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
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Items = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  span {
    font-size: 12px;
  }
`;

const Navbar = () => {
  return (
    <Header>
      <Brand>
        <img src={amazonLogo} alt="Amazon Logo" />
      </Brand>

      <SearchBar>
        <input type="text" />
        <div className="icon-container">
          <AiOutlineSearch fontSize={20} />
        </div>
      </SearchBar>
      <NavLinks>
        <Items to={"/auth"}>
          <span>Hello, Sign in</span>
          Account & Lists
        </Items>
        <Items to={"/orders"}>
          <span>Returns</span>& Orders
        </Items>
        <Items to={"/cart"} className="cart">
          <AiOutlineShoppingCart fontSize={40} />
          <span className="order-number">0</span>
          Cart
        </Items>
      </NavLinks>
    </Header>
  );
};

export default Navbar;
