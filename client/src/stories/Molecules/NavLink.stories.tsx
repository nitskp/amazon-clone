import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NavLink } from "../../Components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default {
  title: "Molecules/NavLink",
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
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
