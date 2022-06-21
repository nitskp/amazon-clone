import styled from "styled-components";
import {
  Anchor,
  Brand,
  Button,
  Footer,
  Input,
  Text,
  TextBetweenLine,
} from "../../Components";
import amazonLogoBlack from "../../Assets/images/amazonLogoBlack.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { GlobalStyles } from "../../Components/GlobalStyles";

interface Inputs {
  email?: string;
  password?: string;
}

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  align-items: center;
  box-shadow: 0 8px 6px -11px black;
  margin-bottom: 40px;
  hr {
    max-width: 368px;
  }
  .create-account {
    max-width: 368px;
    margin-bottom: 40px;
  }
  h5 {
    max-width: 368px;
    margin-bottom: 20px;
  }
`;
const Form = styled.form`
  max-width: 368px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 auto;
  padding: 20px 26px;
  text-align: left;
  margin-bottom: 40px;
  label {
    margin-bottom: 3px;
  }
  input {
    min-width: 296px;
    min-height: 31px;
  }
  h1 {
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    min-width: 296px;
    min-height: 31px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 0;
  }
`;
const Header = styled.header`
  padding-top: 20px;
`;
const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Auth = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Wrapper>
      <GlobalStyles />
      <Header>
        <Brand imgUrl={amazonLogoBlack} />
      </Header>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Text type="h1" fontSize="28px">
            Sign-In
          </Text>
          <Input type="email" register={register} name="email" label="Email" />
          <Input
            type="password"
            register={register}
            name="password"
            label="Password"
          />
          <Button type="submit" primary large>
            Sign-in
          </Button>
          <Text type="p" fontSize="12px">
            {" "}
            By continuing, you agree to Amazon's{" "}
            <Anchor to="#" textColor="#0066c0">
              Conditions of Use
            </Anchor>{" "}
            and{" "}
            <Anchor to="#" textColor="#0066c0">
              Privacy Notice.
            </Anchor>
          </Text>
        </Form>
        <TextBetweenLine text=" New to Amazon?" />
        <Button silver large className="create-account">
          Create your Amazon Account
        </Button>
        <hr />
      </Container>

      <Footer signUpFooter />
    </Wrapper>
  );
};

export default Auth;
