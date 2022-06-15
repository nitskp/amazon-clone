import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BsArrowRepeat } from "react-icons/bs";
import { Button } from "../../Components";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  children: "Secondary",
};

export const White = Template.bind({});
White.args = {
  white: true,
  children: "White",
};

export const PlainText = Template.bind({});
PlainText.args = {
  plainText: true,
  children: "Plaintext",
};

export const Black = Template.bind({});
Black.args = {
  black: true,
  children: "Black",
};

export const Red = Template.bind({});
Red.args = {
  red: true,
  children: "red",
};

export const Icon = Template.bind({});
Icon.args = {
  children: <><BsArrowRepeat /> Icon</>,
};
