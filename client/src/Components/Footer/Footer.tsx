import styled from "styled-components";
import { Brand, ListofLinks, Text, Anchor } from "..";
import amazonLogo from "../../Assets/images/Amazon_logo.svg.png";

interface Props {
  signUpFooter?: boolean;
}

const SignupFooter = styled.footer`
  max-width: 368px;
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  .links {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  a {
    font-size: 11px;
  }
`;

const TheFooter = styled.footer`
  position: relative;
`;

const StyledFooter = styled.footer`
  background: #202d3e;
  padding: 20px 0;
`;
const Container = styled.div`
  max-width: 1600px;
  width: 90vw;
  margin: 0 auto;
  .list-of-links {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: solid 1px #496891;
    margin-bottom: 20px;
    @media screen and (max-width: 428px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .small {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: none;
    @media screen and (max-width: 428px) {
      grid-template-columns: repeat(3, 1fr);
    }
    ul {
      margin-top: 0;
    }
    li {
      margin-bottom: 5px;
    }
    h3 {
      font-size: 11px;
      color: #dddddd;
      margin: 0;
      margin-bottom: 7.5px;
    }
    a {
      font-size: 10px;
      color: #999999;
    }
  }
`;

const SecondFooter = styled.footer`
  background: #131a22;
  padding: 20px 10px;
  p {
    text-align: center;
    margin: 0 auto;
  }
`;

export const Footer = ({ signUpFooter }: Props) => {
  return signUpFooter ? (
    <SignupFooter>
      <div className="links">
        <Anchor to="#" textColor="#0066c0">
          Conditions of use
        </Anchor>
        <Anchor to="#" textColor="#0066c0">
          Privacy Notice
        </Anchor>
        <Anchor to="#" textColor="#0066c0">
          Help
        </Anchor>
      </div>
      <Text type="p" textColor="#555555" fontSize="11px">
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </Text>
    </SignupFooter>
  ) : (
    <TheFooter>
      <StyledFooter>
        <Container>
          <div className="list-of-links">
            <ListofLinks
              heading="Get to know us"
              links={[
                { url: "#", name: "About Us" },
                { url: "#", name: "Careers" },
                { url: "#", name: "Press Releases" },
                { url: "#", name: "Amazon Cares" },
                { url: "#", name: "Gift a smile" },
                { url: "#", name: "Amazon Science" },
              ]}
            />
            <ListofLinks
              heading="Connect with us"
              links={[
                { url: "#", name: "Facebook" },
                { url: "#", name: "Twitter" },
                { url: "#", name: "Instagram" },
              ]}
            />
            <ListofLinks
              heading="Make Money with us"
              links={[
                { url: "#", name: "Sell on Amazon" },
                { url: "#", name: "Sell under Amazon Accelerator" },
                { url: "#", name: "Amazon Global Selling" },
                { url: "#", name: "Become an Affiliate" },
                { url: "#", name: "Fulfilment by Amazon" },
                { url: "#", name: "Advertise your Products" },
                { url: "#", name: "Amazon Pay on Merchants" },
              ]}
            />
            <ListofLinks
              heading="Let us Help You"
              links={[
                { url: "#", name: "Covid-19 and Amazon" },
                { url: "#", name: "Your Account" },
                { url: "#", name: "Returns Centre" },
                { url: "#", name: "100% Purchase Protection" },
                { url: "#", name: "Amazon App Download" },
                { url: "#", name: "Help" },
              ]}
            />
          </div>
          <Brand imgUrl={amazonLogo} />
        </Container>
      </StyledFooter>
      <SecondFooter>
        <Container>
          <div className="list-of-links small">
            <ListofLinks
              heading="AbeBooks"
              links={[{ url: "#", name: "Books, art& collectibles" }]}
            />
            <ListofLinks
              heading="Amazon Web Services"
              links={[
                { url: "#", name: "Scalable Cloud" },
                { url: "#", name: "Computing Services" },
              ]}
            />
            <ListofLinks
              heading="Audible"
              links={[{ url: "#", name: "Download Audio Books" }]}
            />

            <ListofLinks
              heading="DPReview"
              links={[{ url: "#", name: "Digital Photography" }]}
            />

            <ListofLinks
              heading="IMDb"
              links={[{ url: "#", name: " Movies, TV & Celebrities" }]}
            />

            <ListofLinks
              heading="Shopbop"
              links={[{ url: "#", name: "Designer Fashion Brands" }]}
            />

            <ListofLinks
              heading="Amazon Business"
              links={[{ url: "#", name: "Everything For Your Business" }]}
            />

            <ListofLinks
              heading="Prime Now"
              links={[{ url: "#", name: "2-Hour Delivery on Everyday Items" }]}
            />

            <ListofLinks
              heading="Amazon Prime Music"
              links={[
                {
                  url: "#",
                  name: "90 million songs, ad-free. Over 15 million podcast episodes",
                },
              ]}
            />
          </div>
          <Text type="p" textColor="#dddddd" fontSize="11px">
            Conditions of Use & Sale. Privacy Notice. Interest-Based Ads. ©
            1996-2022, Amazon.com, Inc. or its affiliates
          </Text>
        </Container>
      </SecondFooter>
    </TheFooter>
  );
};
// 9999999
// ddddddd
