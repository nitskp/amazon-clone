import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TheNavLink } from "../../Components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default {
  title: "Molecules/TheNavLink",
  component: TheNavLink,
} as ComponentMeta<typeof TheNavLink>;

const Template: ComponentStory<typeof TheNavLink> = (args) => (
  <TheNavLink {...args} />
);

export const Default = Template.bind({});
Template.args = {
  to: "/",
  smallText: "smallText",
  mainText: "mainText",
};

export const CartIcon = Template.bind({});
Template.args = {
  to: "/",
  smallText: "0",
  mainText: "Cart",
  icon: <AiOutlineShoppingCart fontSize={40} />,
};
