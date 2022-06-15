import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Price } from "../../Components";

export default {
  title: "Molecules/Price",
  component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

export const Default = Template.bind({});
Default.args = {
  price: 12345677,
};
