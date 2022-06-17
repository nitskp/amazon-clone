import styled from "styled-components";
import { Text } from "..";

interface Props {
  price: number;
}
// 20B( doesn't works for Rs. symbol)
const StyledPrice = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  position: relative;
  ::before {
    position: absolute;
    top: 4px;
    font-size: 12px;
    left: -20px;
    content: "Rs";
  }
`;

export const Price = ({ price }: Props) => {
  const addCommas = (price: number) => {
    const digits = String(price).split("");
    const length = digits.length;
    let ans: string = "";
    digits.forEach((char, index) => {
      if (length - index + 1 > 3) {
        if ((index + 1) % 2 === 0) {
          ans += char + ",";
        } else {
          ans += char;
        }
      } else if (length - index + 1 === 3) {
        ans += char + ",";
      } else {
        ans += char;
      }
      return ans;
    });
  };
  // need to check add commas function and make it a helper function, needed other places too
  return <StyledPrice type="p">{price}</StyledPrice>;
};
