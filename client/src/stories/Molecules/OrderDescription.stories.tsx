import { ComponentMeta, ComponentStory } from "@storybook/react";
import { OrderDescription } from "../../Components";
import sampleItem from "../../Assets/images/sampleItem.jpg";

export default {
  title: "Molecules/OrderDescription",
  component: OrderDescription,
} as ComponentMeta<typeof OrderDescription>;

const Template: ComponentStory<typeof OrderDescription> = (args) => (
  <OrderDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: sampleItem,
  returnDate: new Date(Date.now()),
  title: "Sample Item",
};
