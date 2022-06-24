import styled from "styled-components";
import { Text } from "..";
import { Anchor } from "..";

interface Props {
  heading: string;
  links: {
    url: string;
    name: string;
  }[];
}

const ListofLinksContainer = styled.div`
  text-align: left;
  padding: 10px 16px;
  h3 {
    margin-bottom: 15px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding-left: 0;
    li {
      margin-bottom: 10px;
    }
  }
`;

export const ListofLinks = ({ heading, links }: Props) => {
  return (
    <ListofLinksContainer>
      <Text type="h3" textColor="#ffffff" fontSize="18px">
        {heading}
      </Text>
      <ul>
        {links.map((link, index) => (
          <li key={link.name + index}>
            <Anchor to={link.url} textColor="#dddddd" fontSize="14px">
              {link.name}
            </Anchor>
          </li>
        ))}
      </ul>
    </ListofLinksContainer>
  );
};
