import styled from "styled-components";
import amazonLogo from "../../Assets/images/Amazon_logo.svg.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Brand, Searchbar, NavLink } from "..";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 10px 20px;
  background: #0f1111;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar = () => {
  return (
    <Header>
      <Brand imgUrl={amazonLogo} />
      <Searchbar />
      <NavLinks>
        <NavLink
          to={"auth"}
          smallText={"Hello, Sign in"}
          mainText={" Account & Lists"}
        />
        <NavLink to="orders" smallText="Returns" mainText="& Orders" />
        <NavLink
          to="cart"
          smallText="0"
          mainText="Cart"
          icon={<AiOutlineShoppingCart fontSize={40} />}
        />
        {/* <Items to={"/cart"} className="cart">
          <AiOutlineShoppingCart fontSize={40} />
          <span className="order-number">0</span>
          Cart
        </Items> */}
      </NavLinks>
    </Header>
  );
};

// export  Navbar;
