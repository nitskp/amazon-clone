import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Bill } from "../../Components";

export default {
  title: "Molecules/Bill",
  component: Bill,
} as ComponentMeta<typeof Bill>;

const Template: ComponentStory<typeof Bill> = (args) => <Bill {...args} />;

export const Sample = Template.bind({});
Template.args = {
  itemsPurchased: 5,
  totalAmount: 1224,
  freeDelivery: true,
};
