import styled from "styled-components";
import amazonLogo from "../../Assets/images/Amazon_logo.svg.png";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Brand, Searchbar, TheNavLink } from "..";
import { useState } from "react";

interface ShowItem {
  display?: boolean;
}

const Header = styled.header`
  background: #0f1111;
`;

const Container = styled.div<ShowItem>`
  max-width: 1600px;
  margin: 0 auto;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 2.5fr 2fr;
  gap: 10px;
  justify-items: flex-start;
  align-items: center;
  position: sticky;
  position: relative;
  top: 0;
  z-index: 9999;
  padding: 10px 20px;

  .hamburger-container {
    position: absolute;
    top: 15px;
    right: 15px;
    display: none;
  }

  .close-container {
    position: absolute;
    top: 15px;
    right: 15px;
    display: none;
  }

  @media (max-width: 645px) {
    padding: 20px;
    grid-template-columns: 1fr 2fr;
    grid-row-gap: 20px;

    .search-bar {
      grid-row: 2;
      grid-column: 1 / span 2;
      margin: 0 auto;
      input {
        width: calc(90vw - 80px);
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 443px) {
    .hamburger-container {
      display: ${({ display }) => (!display ? "block" : "none;")};
    }
    .close-container {
      display: ${({ display }) => (display ? "block" : "none;")};
    }
  }
`;

const NavLinks = styled.nav<ShowItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  @media (max-width: 443px) {
    display: ${({ display }) => (display ? "flex" : "none;")};
    position: absolute;
    top: 0;
    right: -5vw;
    flex-direction: column;
    background: #eaeded;
    width: 60vw;
    height: 100vh;
    padding-top: 100px;
    padding-left: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    a {
      margin-bottom: 20px;
    }
  }
`;

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <Header>
      <Container display={showNavbar}>
        <Brand imgUrl={amazonLogo} />
        <Searchbar />
        <div
          className="hamburger-container"
          onClick={() => setShowNavbar(true)}
        >
          <AiOutlineMenu fontSize={40} color="#ffffff" />
        </div>

        <NavLinks display={showNavbar}>
          <div className="close-container" onClick={() => setShowNavbar(false)}>
            <AiOutlineClose fontSize={40} color="#000000" />
          </div>

          <TheNavLink
            to={"/auth"}
            smallText={"Hello, Sign in"}
            mainText={" Account & Lists"}
            color={showNavbar ? "#000000" : "#ffffff"}
          />
          <TheNavLink
            to="/orders"
            smallText="Returns"
            mainText="& Orders"
            color={showNavbar ? "#000000" : "#ffffff"}
          />

          <TheNavLink
            to="/cart"
            smallText="0"
            mainText="Cart"
            color={showNavbar ? "#000000" : "#ffffff"}
            icon={
              <AiOutlineShoppingCart
                fontSize={40}
                color={showNavbar ? "#000000" : "#ffffff"}
              />
            }
          />
          {/* <Items to={"/cart"} className="cart">
          <AiOutlineShoppingCart fontSize={40} />
          <span className="order-number">0</span>
          Cart
        </Items> */}
        </NavLinks>
      </Container>
    </Header>
  );
};

// export  Navbar;
