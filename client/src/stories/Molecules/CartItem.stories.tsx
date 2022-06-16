import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CartItem } from "../../Components";
import sampleItem from "../../Assets/images/sampleItem.jpg";

export default {
  title: "Molecules/CartItem",
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => (
  <CartItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  price: 9000,
  title: "Item Name with some long heading",
  qty: 12,
  imgUrl: sampleItem,
};
