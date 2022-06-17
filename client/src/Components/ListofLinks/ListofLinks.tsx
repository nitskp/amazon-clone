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
  background: rgb(0, 0, 0);
  text-align: left;
  padding: 10px 16px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }
`;

export const ListofLinks = ({ heading, links }: Props) => {
  return (
    <ListofLinksContainer>
      <Text type="h3" textColor="#ffffff" fontSize="18px">
        {heading}
      </Text>
      <ul>
        {links.map((link) => (
          <li>
            <Anchor to={link.url} textColor="#f2f0f0" fontSize="14px">
              {link.name}
            </Anchor>
          </li>
        ))}
      </ul>
    </ListofLinksContainer>
  );
};
