import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Subtotal } from "../../Components";

export default {
  title: "Molecules/Subtotal",
  component: Subtotal,
} as ComponentMeta<typeof Subtotal>;

const Template: ComponentStory<typeof Subtotal> = (args) => (
  <Subtotal {...args} />
);

export const Example = Template.bind({});
Example.args = {
  totalPrice: 1224,
  noOfItems: 4,
};
