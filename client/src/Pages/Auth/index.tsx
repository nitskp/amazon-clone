import styled from "styled-components";
import { Brand } from "../../Components";
import amazonLogoBlack from "../../Assets/images/amazonLogoBlack.png";

const AuthContainer = styled.div``;
const Header = styled.header``;

const Auth = () => {
  return (
    <>
      <Header>
        <Brand imgUrl={amazonLogoBlack} />
      </Header>
    </>
  );
};

export default Auth;
